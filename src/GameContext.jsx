import React, { createContext, useEffect, useState } from "react";
import Decimal from "break_infinity.js";
import Monsters from "./assets/MonsterFiles/Monsters";
import { produce } from "immer";

const GameContext = createContext();

const GameProvider = ({ children }) => {
	//player logic
	const [playerArmy, setPlayerArmy] = useState({});
	const [playerStats, setPlayerStats] = useState({
		playerArtifacts: new Decimal(20000),
		playerEquipment: new Decimal(20000),
		playerIncome: new Decimal(10000),
	});

	const changePlayerStats = (stat, change) => {
		const addedNumber = new Decimal(change);
		setPlayerStats((prevStat) => ({
			...prevStat,
			[stat]: prevStat[stat].plus(addedNumber),
		}));
	};

	const handleAddToArmy = (id, countChange, name, health, attack) => {
		setPlayerArmy((prevArmy) => {
			if (!prevArmy.hasOwnProperty(id)) {
				return {
					...prevArmy,
					[id]: {
						name: name,
						health: new Decimal(health),
						currentHealth: new Decimal(health),
						attack: new Decimal(attack),
						count: new Decimal(0).plus(new Decimal(countChange)),
					},
				};
			} else {
				return {
					...prevArmy,
					[id]: {
						...prevArmy[id],
						count: prevArmy[id].count.plus(new Decimal(countChange)),
					},
				};
			}
		});
	};

	// Monster logic
	const [monsterComposition, setMonsterComposition] = useState({});

	const generateMonsterComposition = (mapRank, mapSize) => {
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
						changeMessageLog(`${deathCount} ${defendingSide.name} killed`);
						break;
					}
				}
			}
		});
	};
	const processTurn = () => {
		// Create Draft
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
				return;
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
		});
	};

	const updatePlayerArmy = (newArmy) => {
		setPlayerArmy(newArmy);
	};

	const updateMonsterComposition = (newComposition) => {
		setMonsterComposition(newComposition);
	};

	// Navigation Logic
	const [currentNav, setCurrentNav] = useState("Home");
	const changeNavigation = (id) => {
		setCurrentNav(id);
	};

	// Message Box logic
	const [messageLog, setMessageLog] = useState([]);
	useEffect(() => {
		const timer = setInterval(() => {
			setMessageLog((prevLog) => {
				if (prevLog.length > 0) {
					return [...prevLog.slice(0, -1)];
				}
				return prevLog;
			});
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const changeMessageLog = (message) => {
		const addedMessage = produce(messageLog, (messageDraft) => {
			const box = {
				id: Date.now(),
				text: message,
			};

			messageDraft.unShift(box);
		});

		setMessageLog(addedMessage);
	};

	// Income interval
	useEffect(() => {
		const incomeTimer = setInterval(() => {
			const addedNumber = new Decimal(10000);
			setPlayerStats((prevStats) => ({
				...prevStats,
				playerIncome: prevStats.playerIncome.plus(addedNumber),
			}));
		}, 5000);
		return () => clearInterval(incomeTimer);
	}, []);

	return (
		<GameContext.Provider
			value={{
				playerArmy,
				playerStats,
				monsterComposition,
				generateMonsterComposition,
				handleAddToArmy,
				updatePlayerArmy,
				updateMonsterComposition,
				processTurn,
				messageLog,
				currentNav,
				changeMessageLog,
				changeNavigation,
				changePlayerStats,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

export { GameContext, GameProvider };
