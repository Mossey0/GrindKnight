import React, { useContext, useRef, useState } from "react";
import locations from "../LocationFiles.jsx/Locations";
import LocationCard from "../LocationFiles.jsx/HuntingLocationCard";
import BattleSection from "./BattleSection";
import { GameContext } from "../../GameContext";
import { Radius, Skull } from "lucide-react";

const locationRanks = Object.keys(locations);

function BattleLocationSection() {
	const { generateMonsterComposition } = useContext(GameContext);
	const [battleCurrent, setBattleCurrent] = useState("select");
	const [selectTab, setSelectTab] = useState("F");

	const dangerLevel = (size) => {
		return size <= 3
			? "text-green-200"
			: size <= 6
				? "text-yellow-200"
				: size <= 12
					? "text-orange-200"
					: size <= 20
						? "text-black"
						: "text-black";
	};

	const handleTabSelect = (tab) => {
		setSelectTab(tab);
	};

	const locationTab = () => {
		return locationRanks.map((rank) => {
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

	const locationCard = () => {
		return Object.values(locations[selectTab]).map((map) => (
			<div
				className="bg-blue-800 hover:opacity-80 p-4 *:pr-4 *:pl-4 rounded cursor-pointer"
				key={map.name}
			>
				<h1>{map.name}</h1>
				<div className="flex gap-2 text-center">
					<div className="flex items-center">
						<Radius
							size={16}
							className={`${dangerLevel(map.size)}`}
						/>
						<span>{map.size}</span>
					</div>
					{Array.from({ length: map.size }, (_, index) => {
						return <Skull size={16} />;
					}).map((a) => a)}
					<div className="flex items-center"></div>
				</div>
			</div>
		));
	};

	return (
		<div className="p-2 w-full h-full">
			<h1 className="flex text-4xl">Battle</h1>
			<div className="flex flex-col gap-5 h-5/6">
				<div className="flex flex-wrap space-x-1 w-2/3 lg:w-full overflow-y-auto">
					{locationTab()}
				</div>
				<div className="flex flex-col gap-4 *:w-2/3 h-96 overflow-y-auto">
					{locationCard()}
				</div>
				<div className="">
					<div className="flex gap-2">
						<button
							type="input"
							className=""
						>
							Recruit now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BattleLocationSection;
