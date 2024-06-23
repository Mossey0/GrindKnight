import React from "react";
import monsters from "../MonsterFiles/Monsters";

function HungtingGrounds() {
	const monsterCard = (name, health, attack, goldReward, packsize) => {
		return (
			<div className="w-1/3 h-24 text-center">
				{name}
				<p>{`normal pack size: 1-${packsize}`}</p>
			</div>
		);
	};
	console.log(Object.values(monsters).map((a) => a));
	return (
		<div className="relative flex flex-col items-center w-full md:w-2/3 h-96 md:h-full">
			<h1 className="text-2xl">Hunting Grounds</h1>
			<div className="flex flex-wrap p-4 pt-10 w-full h-5/6 overflow-y-auto">
				{Object.values(monsters).map((monster) => {
					return monsterCard(
						monster.name,
						monster.health,
						monster.attack,
						monster.goldReward,
						monster.packSize
					);
				})}
			</div>
		</div>
	);
}

export default HungtingGrounds;
