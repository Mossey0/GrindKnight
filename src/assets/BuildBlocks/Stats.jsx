import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function Stats() {
	const { playerStats } = useContext(GameContext);
	return (
		<div className="flex flex-wrap justify-around p-2 w-auto *:w-40 h-auto md:h-12">
			<div>Health: {playerStats.playerHealth.toString()}</div>
			<div>Power: {playerStats.playerAttack.toString()}</div>
			<div>Soldiers: {playerStats.playerArmySize.toString()}</div>
			<div>Artifacts: {playerStats.playerArtifacts.toString()}</div>
			<div>Equipment: {playerStats.playerEquipment.toString()}</div>
			<div>Income: {playerStats.playerIncome.toString()}</div>
		</div>
	);
}

export default Stats;
