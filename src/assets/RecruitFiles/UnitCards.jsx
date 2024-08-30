import React from "react";
import { Heart, Sword, Coins } from "lucide-react";
import Decimal from "break_infinity.js";

const UnitCards = ({ selectFunctions }) => {
	const {
		recruits,
		handleRecruitSelect,
		selectRecruit,
		formatLargeNumber,
		selectTab,
		selectAmount,
	} = selectFunctions;
	return (
		<>
			{Object.entries(recruits[selectTab]).map(([id, unit]) => (
				<div
					className={`${
						selectRecruit && selectRecruit.name === unit.name
							? "border-purple-600"
							: "border-black"
					} hover:opacity-80 p-4 rounded cursor-pointer`}
					key={id}
					onClick={() => handleRecruitSelect(unit, id)}
				>
					<h1 className="mb-2 font-bold text-xl">{unit.name}</h1>
					<div className="flex gap-4 mb-2 text-center">
						<div className="flex items-center">
							<Heart
								size={16}
								className="pr-1 text-red-500"
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
				</div>
			))}
		</>
	);
};

export default UnitCards;
