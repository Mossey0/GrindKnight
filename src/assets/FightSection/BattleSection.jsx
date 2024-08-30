import React, { useContext, useEffect, useState } from "react";
import MonsterArmyCards from "./MonsterArmyCards";
import PlayerArmyCards from "./PlayerArmyCards";
import { GameContext } from "../../GameContext";
import HealthBars from "./HealthBars";

function BattleSection() {
	const [search, setSearch] = useState(0);
	const [searchFeedback, setSearchFeedback] = useState("Searching");
	const {
		handleStartBattle,
		startBattle,
		currentMapSelected,
		handleBattleMenu,
		handleInBattle,
		battleMenu,
		calculateTotalHealth,
		playerTotalHealth,
		monsterTotalHealth,
		handleSettingHealth,
		playerArmy,
		monsterComposition,
	} = useContext(GameContext);

	// Search Simulation
	useEffect(() => {
		const searchTimer = setInterval(() => {
			if (!battleMenu) {
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
			}
		}, 400);
		return () => clearInterval(searchTimer);
	}, [battleMenu]);

	useEffect(() => {
		if (search >= 12) {
			handleBattleMenu();
			handleSettingHealth();
		}
	}, [search]);

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl">BattleScreen</h1>
			<div className="flex flex-col gap-8 pl-4 w-full md:h-5/6">
				{!battleMenu && <h2 className="p-10 text-4xl">{searchFeedback}</h2>}
				{battleMenu && (
					<div className="">
						<h1>{currentMapSelected.name}</h1>
						<HealthBars
							playerTotalHealth={playerTotalHealth}
							monsterTotalHealth={monsterTotalHealth}
							playerArmy={playerArmy}
							monsterComposition={monsterComposition}
							calculateTotalHealth={calculateTotalHealth}
						/>
						<div className="flex flex-row gap-2 w-full h-[500px] text-pretty text-sm lg:text-base overflow-auto">
							<div className="w-1/2">
								<h1>Player Troops</h1>
								<div className="flex flex-row flex-wrap overflow-y-auto size-full">
									<PlayerArmyCards />
								</div>
							</div>
							<div className="w-1/2">
								<h1>Enemy Troops</h1>
								<div className="flex flex-row flex-wrap overflow-y-auto size-full">
									<MonsterArmyCards />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="flex gap-4">
				<button
					className={startBattle ? "hidden" : ""}
					onClick={() => {
						handleStartBattle();
					}}
					type="button"
				>
					Start Battle
				</button>
				<button
					className={``}
					onClick={() => {
						handleBattleMenu();
						setSearch(0);
						setSearchFeedback("Searching");
						handleInBattle();
					}}
				>
					Continue
				</button>
				<button
					className={``}
					onClick={() => {
						handleBattleMenu();
						setSearch(0);
						setSearchFeedback("Searching");
						handleInBattle();
					}}
				>
					Retreat
				</button>
			</div>
		</div>
	);
}

export default BattleSection;
