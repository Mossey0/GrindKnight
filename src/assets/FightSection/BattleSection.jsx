import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../GameContext";

function BattleSection({ mapProperties }) {
	const {
		monsterComposition,
		playerArmy,
		updatePlayerArmy,
		processTurn,
		updateMonsterComposition,
	} = useContext(GameContext);
	const [search, setSearch] = useState(0);
	const [searchFeedback, setSearchFeedback] = useState("Searching");
	const [startBattle, setStartBattle] = useState(false);

	const battleSimulation = () => {
		const {
			playerArmy: updatedPlayerArmy,
			monsterComposition: updatedMonsterComposition,
		} = processTurn(playerArmy, monsterComposition);

		updatePlayerArmy(updatedPlayerArmy);
		updateMonsterComposition(updatedMonsterComposition);
	};

	// Search Simulation
	useEffect(() => {
		const searchTimer = setInterval(() => {
			setSearch((prevBar) => {
				const newVal = prevBar + 1;
				if (newVal >= 12) {
					clearInterval(searchTimer);
					return 12;
				}
				return newVal;
			});
			setSearchFeedback((prevFeedback) => {
				if (prevFeedback === "...Searching") {
					return "Searching";
				} else {
					return "." + prevFeedback;
				}
			});
		}, 400);
		return () => clearInterval(searchTimer);
	}, []);

	// battle simulation
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

	return (
		<>
			<h1 className="text-2xl">BattleScreen</h1>
			<div className="flex flex-col gap-8 pl-4 w-full md:h-5/6">
				{search !== 12 && <h2 className="p-10 text-4xl">{searchFeedback}</h2>}
				{search === 12 && (
					<>
						<h1>{mapProperties[0]}</h1>
						<div className="flex flex-row justify-between w-full h-8">
							<span className="bg-green-500 w-1/2 text-center">
								Player Health
							</span>
							<span className="bg-red-500 w-1/2 text-center">Enemy Health</span>
						</div>
						<div className="flex flex-row gap-2 w-full text-pretty text-sm lg:text-base">
							<div className="w-1/2">
								<h1>Player Troops</h1>
								<div className="flex flex-row flex-wrap overflow-y-auto size-full">
									{Object.entries(playerArmy).map(([id, unit]) => (
										<div key={id}>
											<p>{unit.name}</p>
											<p>
												Health: {unit.health.toString()}/
												{unit.currentHealth.toString()}
											</p>
											<p>Attack: {unit.attack.toString()}</p>
											<p>Count: {unit.count.toString()}</p>
										</div>
									))}
								</div>
							</div>
							<div className="w-1/2">
								<h1>Enemy Troops</h1>
								<div className="flex flex-row flex-wrap overflow-y-auto size-full">
									{Object.entries(monsterComposition).map(([id, monster]) => (
										<div key={id}>
											<p>{monster.name}</p>
											<p>
												Health: {monster.health.toString()}/
												{monster.currentHealth.toString()}
											</p>
											<p>Attack: {monster.attack.toString()}</p>
											<p>Count: {monster.count.toString()}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			<button
				className={startBattle ? "hidden" : ""}
				onClick={handleStartBattle}
				type="button"
			>
				Start Battle
			</button>
		</>
	);
}

export default BattleSection;
