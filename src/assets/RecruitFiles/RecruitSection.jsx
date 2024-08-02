import React, { useContext, useRef, useState } from "react";
import recruits from "./Recruit";
import { GameContext } from "../../GameContext";
import { Heart, Sword, Coins } from "lucide-react";
import Decimal from "break_infinity.js";

const rankKeys = Object.keys(recruits);

function RecruitSection() {
	const [selectTab, setSelectTab] = useState("F");
	const [selectRecruit, setSelectRecruit] = useState(null);
	const [selectAmount, setSelectAmount] = useState(1);
	const recruitStats = useRef(null);
	const { handleAddToArmy, playerStats, changePlayerStat, formatLargeNumber } =
		useContext(GameContext);

	const handleBuyRecruit = (recruitStats) => {
		if (playerStats.playerIncome.gt(recruitStats.cost)) {
			const cost = -recruitStats.cost;
			changePlayerStat("playerIncome", cost);
			handleAddToArmy(
				recruitStats.name,
				new Decimal(1),
				recruitStats.name,
				recruitStats.health,
				recruitStats.attack
			);
		}
	};

	const handleTabSelect = (tab) => {
		setSelectTab(tab);
	};

	const tabButton = () => {
		return rankKeys.map((rank) => {
			return (
				<button
					key={rank}
					className={`px-4 py-2 font-semibold rounded-t-lg ${
						selectTab === rank ? "bg-blue-600" : "bg-slate-400"
					}`}
					onClick={() => handleTabSelect(rank)}
				>
					{rank} Rank
				</button>
			);
		});
	};

	const unitCard = (selectTab) => {
		return Object.values(recruits[selectTab]).map((unit) => (
			<div
				className="bg-blue-800 hover:opacity-80 p-4 *:pr-4 *:pl-4 rounded cursor-pointer"
				key={unit.name}
			>
				<h1>{unit.name}</h1>
				<div className="flex gap-2 text-center">
					<div className="flex items-center">
						<Heart
							size={16}
							className="mr-1 text-red-500"
						/>
						<span>{formatLargeNumber(unit.health)}</span>
					</div>
					<div className="flex items-center">
						<Sword
							size={16}
							className="mr-1 text-blue-500"
						/>
						<span>{formatLargeNumber(unit.attack)}</span>
					</div>
					<div className="flex items-center">
						<Coins
							size={16}
							className="mr-1 text-yellow-500"
						/>
						<span>
							{formatLargeNumber(
								new Decimal(selectAmount).times(unit.cost)
							).toString()}
						</span>
					</div>
				</div>
				<div>description</div>
			</div>
		));
	};

	return (
		<div className="p-2 w-full h-full">
			<h1 className="flex text-4xl">Recruit Tavern</h1>
			<div className="flex flex-col gap-5 h-5/6">
				<div className="flex flex-wrap space-x-1 w-2/3 lg:w-full overflow-y-auto">
					{tabButton()}
				</div>
				<div className="flex flex-col gap-4 *:w-2/3 h-96 overflow-y-auto">
					{unitCard(selectTab)}
				</div>
				<div className="">
					<div className="flex gap-2">
						{[1, 5, 10, 100, 1000].map((number) => {
							return (
								<button
									className={`rounded px-3 py-1 ${selectAmount === number ? "bg-blue-500" : "bg-slate-400 hover:bg-gray-300"}`}
									type="button"
									key={number}
									name="number"
									onClick={() => {
										setSelectAmount(number);
									}}
								>
									{number}
								</button>
							);
						})}
						<button
							type="input"
							className=""
							onClick={() => handleBuyRecruit(recruitStats.current)}
						>
							Recruit now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecruitSection;
