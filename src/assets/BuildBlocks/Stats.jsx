import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function Stats() {
	const { playerStats } = useContext(GameContext);
	return (
		<div className="flex flex-wrap justify-around p-2 h-20 md:h-12">
			<span>Health: {playerStats.playerHealth}</span>
			<span>Power: {playerStats.playerAttack}</span>
			<span>Soldiers: {playerStats.playerArmySize}</span>
			<span>Artifacts: {playerStats.playerArtifacts}</span>
			<span>Equipment: {playerStats.playerEquipment}</span>
		</div>
	);
}

export default Stats;
