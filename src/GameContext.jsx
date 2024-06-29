import React, { createContext, useEffect, useState } from "react";
import Decimal from "break_infinity.js";

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
