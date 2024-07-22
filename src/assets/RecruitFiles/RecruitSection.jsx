import React, { useContext, useRef, useState } from "react";
import RecruitCard from "./RecruitsCard";
import recruits from "./Recruit";
import { GameContext } from "../../GameContext";
import Decimal from "break_infinity.js";

function RecruitSection() {
	const [selectRecruit, setSelectRecruit] = useState(null);
	const [selectAmount, setSelectAmount] = useState(1);
	const recruitStats = useRef(null);
	const { handleAddToArmy, playerStats, changePlayerStats } =
		useContext(GameContext);
	const handleSelectRecruit = (recruit, stats) => {
		setSelectRecruit(recruit);
		recruitStats.current = { ...stats };
	};

	const handleBuyRecruit = (recruitStats) => {
		if (playerStats.playerIncome.gt(recruitStats.cost)) {
			const cost = -recruitStats.cost;
			changePlayerStats("playerIncome", cost);
			handleAddToArmy(
				recruitStats.name,
				1,
				recruitStats.name,
				recruitStats.health,
				recruitStats.attack
			);
		}
	};

	return (
		<div className="relative flex flex-col items-center w-full md:w-3/5 h-96 md:h-full">
			<h1 className="text-2xl">Recruits</h1>
			<div className="flex flex-wrap gap-6 pt-10 w-full h-5/6 overflow-y-auto">
				{Object.entries(recruits).map(([rank, recruits], index) => (
					<div
						className="w-full"
						key={index}
					>
						<h1 className="text-2xl">{rank}</h1>
						<div className="flex flex-wrap gap-2 w-full">
							{Object.entries(recruits).map(([name, recruit], index) => {
								return (
									<RecruitCard
										nameId={name}
										stats={recruit}
										name={recruit.name}
										rank={recruit.rank}
										health={recruit.health}
										attack={recruit.attack}
										cost={recruit.cost}
										key={index}
										selectRecruit={selectRecruit}
										handleSelectRecruit={handleSelectRecruit}
									/>
								);
							})}
						</div>
					</div>
				))}
			</div>
			<div className="mt-10">
				<button
					type="button"
					className=""
					onClick={() => handleBuyRecruit(recruitStats.current)}
				>
					Recruit now
				</button>
			</div>
		</div>
	);
}

export default RecruitSection;
