import React from "react";

function HealthBars({
	playerTotalHealth,
	monsterTotalHealth,
	playerArmy,
	monsterComposition,
	calculateTotalHealth,
}) {
	const calculatePercentage = (army, armyTotal) => {
		const currentHealth = calculateTotalHealth(army);
		const total = armyTotal;

		if (total.lte(0)) {
			return 0;
		}

		const percentage = currentHealth.divide(total).times(100);

		return percentage.toFixed(1);
	};
	return (
		<div className="flex flex-row justify-between w-full h-8">
			<div className="relative z-0 bg-gray-500 w-1/2 text-center overflow-hidden">
				<p className="relative z-20 text-white">Health</p>
				<div
					style={{
						width: `${calculatePercentage(playerArmy, playerTotalHealth)}%`,
					}}
					className="top-0 left-0 z-10 absolute bg-green-700 h-full"
				></div>
			</div>
			<div className="relative bg-gray-500 w-1/2 text-center overflow-hidden">
				<div className="relative z-20 text-white">Enemy Health</div>
				<div
					style={{
						width: `${calculatePercentage(monsterComposition, monsterTotalHealth)}%`,
					}}
					className="top-0 left-0 z-10 absolute bg-red-700 h-full"
				></div>
			</div>
		</div>
	);
}

export default HealthBars;
