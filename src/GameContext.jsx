import React, { createContext, useEffect, useState } from "react";
import Decimal from "break_infinity.js";
import recruits from "./assets/RecruitFiles/Recruit";

const GameContext = createContext();

const GameProvider = ({ children }) => {
	//player logic
	const [playerArmy, setPlayerArmy] = useState(
		Object.fromEntries(
			Object.values(recruits).flatMap((eachRank) => {
				return Object.entries(eachRank).map(([unitKey, unitInfo]) => [
					unitKey,
					{
						name: unitInfo.name,
						count: new Decimal(0),
						health: new Decimal(unitInfo.health),
						attack: new Decimal(unitInfo.attack),
					},
				]);
			})
		)
	);
	const [playerArmyStats, setPlayerArmyStats] = useState({
		totalHealth: new Decimal(0),
		totalAttack: new Decimal(0),
		totalCount: new Decimal(0),
	});
	const [playerStats, setPlayerStats] = useState({
		playerArtifacts: new Decimal(20000),
		playerEquipment: new Decimal(20000),
		playerIncome: new Decimal(0),
	});
	const handlePlayerArmyChange = (unitKey, changeAmount) => {
		setPlayerArmy((prevArmy) => ({
			...prevArmy,
			[unitKey]: {
				...prevArmy[unitKey],
				count: prevArmy[unitKey].count.plus(new Decimal(changeAmount)),
			},
		}));
	};

	const changePlayerStats = (stat, change) => {
		const addedNumber = new Decimal(change);
		setPlayerStats((prevStat) => ({
			...prevStat,
			[stat]: (prevStat[stat] += addedNumber),
		}));
	};

	useEffect(() => {
		const updatedTotals = Object.values(playerArmy).reduce(
			(totalObject, unitStat) => ({
				totalHealth: totalObject.totalHealth.plus(
					unitStat.health.times(unitStat.count)
				),
				totalAttack: totalObject.totalAttack.plus(
					unitStat.attack.times(unitStat.count)
				),
				totalCount: totalObject.totalCount.plus(unitStat.count),
			}),
			{
				totalHealth: new Decimal(0),
				totalAttack: new Decimal(0),
				totalCount: new Decimal(0),
			}
		);
		setPlayerArmyStats(updatedTotals);
	}, [playerArmy]);

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

	const changeMessageLog = (intent, message) => {
		if (intent === "add") {
			const messageTemplate = { id: Date.now(), text: message };
			setMessageLog((prevLog) => [messageTemplate, ...prevLog]);
		}
		if (intent === "remove") {
			setMessageLog((prevLog) => [...prevLog.slice(0, -1)]);
		}
	};

	// Income interval
	useEffect(() => {
		const incomeTimer = setInterval(() => {
			const addedNumber = new Decimal(10);
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
				playerStats,
				playerArmyStats,
				messageLog,
				currentNav,
				playerArmy,
				handlePlayerArmyChange,
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
