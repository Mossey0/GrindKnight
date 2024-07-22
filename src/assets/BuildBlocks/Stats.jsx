import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function Stats() {
	const { playerStats } = useContext(GameContext);
	return (
		<div className="flex flex-wrap justify-around p-2 w-auto *:w-40 h-auto md:h-12">
			<div>Health: {1}</div>
			<div>Power: {1}</div>
			<div>Soldiers: {1}</div>
			<div>Artifacts: {1}</div>
			<div>Equipment: {1}</div>
			<div>Income: {playerStats.playerIncome.toString()}</div>
		</div>
	);
}

export default Stats;
