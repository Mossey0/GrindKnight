import React from "react";
import monsters from "../MonsterFiles/Monsters";
import locations from "../LocationFiles.jsx/Locations";

function HungtingGrounds() {
	const monsterCard = (name, health, attack, goldReward, packsize) => {
		return (
			<div className="w-1/3 h-24 text-center">
				{name}
				<p>{`normal pack size: 1-${packsize}`}</p>
			</div>
		);
	};

	const tierColor = (tier) => {
		return tier === 1
			? "bg-blue-100"
			: tier === 2
				? "bg-yellow-100"
				: tier === 3
					? "bg-orange-100"
					: tier === 4
						? "bg-red-100"
						: tier === 5
							? "bg-purple-100"
							: "";
	};

	const locationCard = (name, tier, subTier, size, packMultiplier, index) => {
		const colorClass = tierColor(tier);
		return (
			<div
				className={`flex flex-col gap-2 ${colorClass} hover:bg-opacity-25 p-2 rounded-md md:w-60 cursor-pointer w-1/3`}
				key={index}
			>
				<h3 className="mb-2 text-xl">{name}</h3>
				<p>
					Tier: <span className="text-">{tier}</span>
				</p>
				<p>
					Rank: <span>{subTier}</span>
				</p>
				<p>Size: {size}</p>
			</div>
		);
	};
	return (
		<div className="relative flex flex-col items-center w-full md:w-1/3 h-96 md:h-full">
			<h1 className="text-2xl">Hunting Grounds</h1>
			<div className="flex flex-wrap justify-center gap-6 pt-10 w-full h-5/6 overflow-y-auto">
				{Object.values(locations).map((location, index) => {
					return locationCard(
						location.name,
						location.tier,
						location.subtier,
						location.size,
						location.packMultiplier,
						index
					);
				})}
			</div>
			<div className="mt-10">
				<button
					type="button"
					className=""
				>
					Run
				</button>
			</div>
		</div>
	);
}

export default HungtingGrounds;
