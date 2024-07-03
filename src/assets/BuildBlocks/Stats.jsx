import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function Stats() {
	const { playerStats, playerArmyStats, handlePlayerArmyChange } =
		useContext(GameContext);
	return (
		<div className="flex flex-wrap justify-around p-2 w-auto *:w-40 h-auto md:h-12">
			<div onClick={() => handlePlayerArmyChange("peasant", 5)}>
				Health: {playerArmyStats.totalHealth.toString()}
			</div>
			<div>Power: {playerArmyStats.totalAttack.toString()}</div>
			<div>Soldiers: {playerArmyStats.totalCount.toString()}</div>
			<div>Artifacts: {playerStats.playerArtifacts.toString()}</div>
			<div>Equipment: {playerStats.playerEquipment.toString()}</div>
			<div>Income: {playerStats.playerIncome.toString()}</div>
		</div>
	);
}

export default Stats;
