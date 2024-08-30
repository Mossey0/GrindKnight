import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function PlayerArmyCards() {
	const { playerArmy } = useContext(GameContext);
	return (
		<>
			{Object.entries(playerArmy).map(([id, unit]) => (
				<p key={id}>
					<span>{unit.name}</span>
					<span>
						Health: {unit.health.toString()}/{unit.currentHealth.toString()}
					</span>
					<span>Attack: {unit.attack.toString()}</span>
					<span>Count: {unit.count.toString()}</span>
				</p>
			))}
		</>
	);
}

export default PlayerArmyCards;
