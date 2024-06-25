import React, { createContext, useEffect, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
	const [messageLog, setMessageLog] = useState([]);
	const [currentNav, setCurrentNav] = useState(0);
	const [playerStats, setPlayerStats] = useState({
		playerHealth: 100,
		playerAttack: 10,
		playerIncome: 10,
		playerArmySize: 1,
		playerArtifacts: 0,
		playerEquipment: 0,
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
		setPlayerStats((prevStat) => ({
			...prevStat,
			[stat]: (prevStat[stat] += 1),
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
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	return (
		<GameContext.Provider
			value={{
				playerStats,
				messageLog,
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
