import React, { useEffect, useState, useContext } from "react";
import { GameContext } from "../../GameContext";

function BattleSection({ mapProperties }) {
	const { playerArmy } = useContext(GameContext);
	const [search, setSearch] = useState(0);
	const [searchFeedback, setSearchFeedback] = useState("Searching");

	useEffect(() => {
		const searchTimer = setInterval(() => {
			setSearch((prevBar) => {
				const newVal = prevBar + 1;
				if (newVal >= 20) {
					clearInterval(searchTimer);
					return 20;
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
		}, 300);
		return () => clearInterval(searchTimer);
	}, []);

	return (
		<>
			<h1 className="text-2xl">BattleScreen</h1>
			<div className="flex flex-wrap pl-4 w-full md:h-5/6">
				{search !== 20 && <h2 className="p-10 text-4xl">{searchFeedback}</h2>}
				{search && (
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
									{Object.entries(playerArmy).map(
										([unitKey, unitInfo], index) => {
											return (
												<div
													key={index}
													className="w-1/2"
												>
													<span>
														{unitInfo.name} : {unitInfo.count.toString()}
													</span>
												</div>
											);
										}
									)}
								</div>
							</div>
							<div className="w-1/2">
								<h1>Enemy Troops</h1>
								<div className="flex flex-row flex-wrap overflow-y-auto size-full">
									{Object.entries(playerArmy).map(
										([unitKey, unitInfo], index) => {
											return (
												<div
													key={index}
													className="w-1/2"
												>
													<span>
														{unitInfo.name} : {unitInfo.count.toString()}
													</span>
												</div>
											);
										}
									)}
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default BattleSection;
