import React, { createContext, useEffect, useState } from "react";
import Decimal from "break_infinity.js";
import Monsters from "./assets/MonsterFiles/Monsters";
import { produce } from "immer";
import BuildingData from "./assets/Building/BuildingData";

const GameContext = createContext();

const GameProvider = ({ children }) => {
	//player logic
	const [playerArmy, setPlayerArmy] = useState({});
	const [playerStats, setPlayerStats] = useState({
		playerArtifacts: new Decimal(20000),
		playerEquipment: new Decimal(20000),
		playerGold: new Decimal(10000),
		playerArmyDeaths: new Decimal(0),
	});

	const changePlayerStats = (stat, change) => {
		const addedNumber = new Decimal(change);
		const changedStat = produce(playerStats, (statDraft) => {
			statDraft[stat] = statDraft[stat].plus(addedNumber);
		});
		setPlayerStats(changedStat);
	};

	const handleAddToArmy = (id, countChange, name, health, attack) => {
		setPlayerArmy(
			produce((draft) => {
				if (!draft[id]) {
					draft[id] = {
						name,
						health: new Decimal(health),
						currentHealth: new Decimal(health),
						attack: new Decimal(attack),
						count: new Decimal(countChange),
					};
				} else {
					draft[id].count = draft[id].count.plus(new Decimal(countChange));
				}
			})
		);
	};

	// Player Building Logic
	const TIER_COMPLETION = new Decimal(1.5);
	const [playerBuildings, setPlayerBuildings] = useState(BuildingData);

	const isTierComplete = (tier) => {
		return Object.values(tier).every((building) => building.count.gt(0));
	};

	const addBuilding = (tier, buildingName, amount) => {
		const DAmount = new Decimal(amount);
		const cost = playerBuildings[tier][buildingName].calculateCost(DAmount);
		if (playerGold.gte(cost)) {
			setPlayerBuildings(
				produce((draft) => {
					draft[tier][buildingName].count =
						draft[tier][buildingName].count.plus(DAmount);
				})
			);
			setPlayerStats(
				produce((draft) => {
					draft.playerGold = draft.playerGold.minus(cost);
				})
			);
			addNewMessage(
				`${amount} ${playerBuildings[tier][buildingName].name} built`
			);
		} else {
			addNewMessage("Cannot afford");
		}
	};

	const upgradeBuilding = (tier, buildingName) => {
		if (playerGold >= playerBuildings[tier][buildingName]) {
			setPlayerBuildings(
				produce((draft) => {
					draft[tier][buildingName].level =
						draft[tier][buildingName].level.plus(1);
				})
			);
		} else {
			addNewMessage("Not enough gold");
		}
	};

	const totalBuildingIncome = () => {
		return Object.values(playerBuildings).reduce((totalIncome, tier) => {
			let incomeForTier = Object.values(tier).reduce((tierIncome, building) => {
				return tierIncome.plus(building.calculateIncome());
			}, new Decimal(0));

			incomeForTier = isTierComplete(tier)
				? incomeForTier.times(TIER_COMPLETION)
				: incomeForTier;

			return totalIncome.plus(incomeForTier);
		}, new Decimal(0));
	};

	// Big Number Logic
	const abbreviations = [
		"",
		"K",
		"M",
		"B",
		"T",
		"Qa",
		"Qi",
		"Sx",
		"Sp",
		"Oc",
		"No",
	];

	function formatLargeNumber(number) {
		const num = new Decimal(number);

		if (num.lt(1000)) {
			return num.toFixed(0);
		}

		const magnitude = Math.min(
			Math.floor(num.log10() / 3),
			abbreviations.length - 1
		);
		const scaled = num.div(Decimal.pow(1000, magnitude));

		return scaled.toFixed(0) + abbreviations[magnitude];
	}

	// Map logic

	const [currentMapSelected, setCurrentMapSelected] = useState({});

	const handleMapChange = (mapObject) => {
		setCurrentMapSelected({
			mapName: mapObject.name,
			mapRank: mapObject.rank,
			mapSize: mapObject.size,
		});
	};

	// Monster logic
	const [monsterComposition, setMonsterComposition] = useState({});

	const generateMonsterComposition = (mapRank, mapSize, mapBoss) => {
		console.log(mapRank, mapSize);
		const ranks = ["F", "D", "C", "B", "A", "S", "SS", "SSS", "X", "XX"];
		const mapRankIndex = ranks.indexOf(mapRank);
		setMonsterComposition((prevComp) => {
			const composition = {};
			// Pass through each rank
			for (let i = 0; i <= mapRankIndex; i++) {
				let rank = ranks[i];
				let monstersInRank = Object.values(Monsters[rank]);
				const keys = Object.keys(Monsters[rank]);

				// Calculate the number of monsters per rank (boss rank only 1-2)
				let numbMonsters;

				if (i === mapRankIndex) {
					numbMonsters = Math.floor(Math.random() * 2 + 1);
				} else {
					numbMonsters = Math.floor(Math.random() * monstersInRank.length + 1);
				}

				const monsterSet = new Set();

				// Start adding monsters for each rank (all unique)
				for (let j = 0; j < numbMonsters; j++) {
					const getRandomMonster = () => {
						return Math.floor(Math.random() * monstersInRank.length);
					};
					let randomMonsterIndex;
					do {
						randomMonsterIndex = getRandomMonster();
					} while (monsterSet.has(randomMonsterIndex));

					monsterSet.add(randomMonsterIndex);
					const currentMonster = monstersInRank[randomMonsterIndex];

					const monsterID = keys[randomMonsterIndex];
					composition[monsterID] = {
						name: currentMonster.name,
						health: new Decimal(currentMonster.health),
						currentHealth: new Decimal(currentMonster.health),
						attack: new Decimal(currentMonster.attack),
						count: new Decimal(currentMonster.packSize).times(
							new Decimal(mapSize)
						),
					};
				}
			}
			return composition;
		});
	};

	// Battle Logic
	const [startBattle, setStartBattle] = useState(false);
	const [inBattle, setInBattle] = useState(false);
	const [battleMenu, setBattleMenu] = useState(false);

	const handleBattleMenu = () => {
		setBattleMenu(!battleMenu);
	};
	const updatePlayerArmy = (newArmy) => {
		setPlayerArmy(newArmy);
	};

	const updateMonsterComposition = (newComposition) => {
		setMonsterComposition(newComposition);
	};

	const handleInBattle = () => {
		setInBattle(!inBattle);
	};

	const processTurn = () => {
		// Create Draft of both armies
		return produce({ playerArmy, monsterComposition }, (draft) => {
			// Grab current living units
			const playerAliveUnits = Object.keys(draft.playerArmy).filter((key) => {
				return draft.playerArmy[key].count.gt(0);
			});

			const monsterAliveUnits = Object.keys(draft.monsterComposition).filter(
				(key) => {
					return draft.monsterComposition[key].count.gt(0);
				}
			);

			// Check if both armies are available
			if (playerAliveUnits.length === 0 || monsterAliveUnits.length === 0) {
				if (playerAliveUnits.length === 0) {
					addNewMessage("Your army has been defeated");
					setStartBattle(false);
					return;
				}
				if (monsterAliveUnits.length === 0) {
					addNewMessage("Enemy army defeated");
					setStartBattle(false);
					return;
				}
			}

			// Select a unit from each faction
			const playerUnitKey =
				playerAliveUnits[Math.floor(Math.random() * playerAliveUnits.length)];
			const monsterUnitKey =
				monsterAliveUnits[Math.floor(Math.random() * monsterAliveUnits.length)];

			const playerUnit = draft.playerArmy[playerUnitKey];
			const monsterUnit = draft.monsterComposition[monsterUnitKey];

			// Update units
			const updatedMonsterUnit = processAttack(playerUnit, monsterUnit);
			const updatedPlayerUnit = processAttack(monsterUnit, playerUnit);

			draft.playerArmy[playerUnitKey] = updatedPlayerUnit;
			draft.monsterComposition[monsterUnitKey] = updatedMonsterUnit;

			// Remove unit if no longer alive
			if (draft.playerArmy[playerUnitKey].count.eq(0)) {
				delete draft.playerArmy[playerUnitKey];
			}
			if (draft.monsterComposition[monsterUnitKey].count.eq(0)) {
				delete draft.monsterComposition[monsterUnitKey];
			}
		});
	};

	const processAttack = (attackingSide, defendingSide) => {
		return produce(defendingSide, (draft) => {
			let totalUnitAttack = attackingSide.count.times(attackingSide.attack);
			let deathCount = new Decimal(0);

			// Continue to apply damage until unit is dead or damage turns to 0
			while (draft.count.gt(0) && totalUnitAttack.gt(0)) {
				const minDamage = Decimal.min(totalUnitAttack, draft.currentHealth);

				//Apply Damage
				draft.currentHealth = draft.currentHealth.minus(minDamage);
				totalUnitAttack = totalUnitAttack.minus(minDamage);

				// Check current health is 0
				if (draft.currentHealth.lte(0)) {
					draft.count = draft.count.minus(1);
					deathCount = deathCount.plus(1);
					if (draft.count.gt(0)) {
						draft.currentHealth = new Decimal(draft.health);
					} else {
						draft.currentHealth = new Decimal(0);
						addNewMessage(`${deathCount} ${defendingSide.name} killed`);
						break;
					}
				}
			}
		});
	};

	const calculateTotalHealth = (army) => {
		return Object.keys(army).reduce((sum, unitName) => {
			return sum.plus(army[unitName].health.times(army[unitName].count));
		}, new Decimal(0));
	};

	const [playerTotalHealth, setPlayerTotalHealth] = useState(0);
	const [monsterTotalHealth, setMonsterTotalHealth] = useState(0);

	const handleSettingHealth = () => {
		setPlayerTotalHealth(calculateTotalHealth(playerArmy));
		setMonsterTotalHealth(calculateTotalHealth(monsterComposition));
	};

	const battleSimulation = () => {
		const {
			playerArmy: updatedPlayerArmy,
			monsterComposition: updatedMonsterComposition,
		} = processTurn(playerArmy, monsterComposition);

		updatePlayerArmy(updatedPlayerArmy);
		updateMonsterComposition(updatedMonsterComposition);
	};

	const handleBattleSelect = () => {
		setInBattle(!inBattle);
	};

	// battle simulation timer
	useEffect(() => {
		let battleInterval;
		if (startBattle) {
			battleInterval = setTimeout(battleSimulation, 1000);
		}
		return () => clearTimeout(battleInterval);
	}, [startBattle, battleSimulation]);

	const handleStartBattle = () => {
		if (Object.keys(playerArmy).length > 0) {
			setStartBattle(true);
		}
	};

	// Text Logic
	const [itemText, setItemText] = useState({});
	const [descriptionText, setDescriptionText] = useState({});

	const handleItemText = (textObj) => {
		setItemText(textObj);
	};

	const handleTextChange = (textObj) => {
		setDescriptionText(textObj);
	};

	// Navigation Logic
	const [currentNav, setCurrentNav] = useState("Home");
	const changeNavigation = (id) => {
		setCurrentNav(id);
	};

	// Message Box logic
	const [messageLog, setMessageLog] = useState([]);

	const addNewMessage = (message) => {
		setMessageLog((prevLog) => [
			{
				id: Date.now(),
				text: message,
			},
			...prevLog,
		]);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setMessageLog((prevLog) =>
				prevLog.length > 0 ? prevLog.slice(0, -1) : prevLog
			);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	// Income interval
	useEffect(() => {
		const incomeTimer = setInterval(() => {
			const addedNumber = new Decimal(10000);
			setPlayerStats(
				produce((draft) => {
					draft.playerGold = draft.playerGold.plus(addedNumber);
				})
			);
		}, 5000);
		return () => clearInterval(incomeTimer);
	}, []);

	return (
		<GameContext.Provider
			value={{
				playerArmy,
				playerStats,
				formatLargeNumber,
				monsterComposition,
				generateMonsterComposition,
				handleAddToArmy,
				updatePlayerArmy,
				updateMonsterComposition,
				processTurn,
				messageLog,
				addNewMessage,
				currentNav,
				changeNavigation,
				changePlayerStats,
				handleMapChange,
				currentMapSelected,
				handleStartBattle,
				startBattle,
				handleBattleSelect,
				inBattle,
				handleInBattle,
				battleMenu,
				handleBattleMenu,
				playerTotalHealth,
				monsterTotalHealth,
				handleSettingHealth,
				calculateTotalHealth,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export { GameContext, GameProvider };
