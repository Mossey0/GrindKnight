import React, { createContext, useEffect, useState } from "react";
import Decimal from "break_infinity.js";
import { m } from "framer-motion";

const GameContext = createContext();

const GameProvider = ({ children }) => {
	const [messageLog, setMessageLog] = useState([]);
	const [currentNav, setCurrentNav] = useState("Home");
	const [playerStats, setPlayerStats] = useState({
		playerHealth: new Decimal(1000),
		playerAttack: new Decimal(20000),
		playerArmySize: new Decimal(20000),
		playerArtifacts: new Decimal(20000),
		playerEquipment: new Decimal(20000),
		playerIncome: new Decimal(0),
	});
	const [playerArmy, setPlayerArmy] = useState({
		villager: new Decimal(0),
		peasant: new Decimal(0),
		apprentice: new Decimal(0),
		militaryTrainee: new Decimal(0),
		footman: new Decimal(0),
		militia: new Decimal(0),
		archer: new Decimal(0),
		pikeman: new Decimal(0),
		crossboman: new Decimal(0),
		guardsman: new Decimal(0),
		knight: new Decimal(0),
		lancer: new Decimal(0),
		paladin: new Decimal(0),
		berserker: new Decimal(0),
		captain: new Decimal(0),
		mage: new Decimal(0),
		templar: new Decimal(0),
		ranger: new Decimal(0),
		gladiator: new Decimal(0),
		summoner: new Decimal(0),
		warlock: new Decimal(0),
		barabarian: new Decimal(0),
		assassin: new Decimal(0),
		eliteGuardsman: new Decimal(0),
		battlemage: new Decimal(0),
		pyromancer: new Decimal(0),
		rogue: new Decimal(0),
		druid: new Decimal(0),
		shaman: new Decimal(0),
		sorcerer: new Decimal(0),
		loneMonk: new Decimal(0),
		necromancer: new Decimal(0),
		wizard: new Decimal(0),
		divineWarrior: new Decimal(0),
		stormCaller: new Decimal(0),
		crusader: new Decimal(0),
		shadowBlade: new Decimal(0),
		drakenKnight: new Decimal(0),
		dragonSlayer: new Decimal(0),
		starCaller: new Decimal(0),
		voidWalker: new Decimal(0),
		legendaryHero: new Decimal(0),
		celestialHero: new Decimal(0),
		avatarOfWar: new Decimal(0),
		shadowMonarch: new Decimal(0),
	});

	const changeMessageLog = (intent, message) => {
		if (intent === "add") {
			const messageTemplate = { id: Date.now(), text: message };
			setMessageLog((prevLog) => [messageTemplate, ...prevLog]);
		}
		if (intent === "remove") {
			setMessageLog((prevLog) => [...prevLog.slice(0, -1)]);
		}
	};
	const changeNavigation = (id) => {
		setCurrentNav(id);
	};

	const changePlayerStats = (stat, change) => {
		const addedNumber = new Decimal(change);
		setPlayerStats((prevStat) => ({
			...prevStat,
			[stat]: (prevStat[stat] += addedNumber),
		}));
	};

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

	useEffect(() => {
		const incomeTimer = setInterval(() => {
			const addedNumber = new Decimal(9999);
			setPlayerStats((prevStats) => ({
				...prevStats,
				playerIncome: prevStats.playerIncome.plus(addedNumber),
			}));
		}, 1000);
		return () => clearInterval(incomeTimer);
	}, []);

	return (
		<GameContext.Provider
			value={{
				playerStats,
				messageLog,
				currentNav,
				playerArmy,
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
