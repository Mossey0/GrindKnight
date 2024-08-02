import React, { useContext } from "react";
import { GameContext } from "../../GameContext";
import { ArrowUpCircle } from "lucide-react";

function Stats() {
	const { playerStats, formatLargeNumber } = useContext(GameContext);
	return (
		<div className="flex flex-wrap justify-around *:p-1 *:font-mono">
			<div>Power: {1}</div>
			<div>Soldiers: {1}</div>
			<div>Artifacts: {1}</div>
			<div>Equipment: {1}</div>
			<div>
				Income: {formatLargeNumber(playerStats.playerIncome.toString())}
			</div>
		</div>
	);
}

export default Stats;
