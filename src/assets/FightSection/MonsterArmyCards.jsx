import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function MonsterArmyCards() {
	const { monsterComposition } = useContext(GameContext);
	return (
		<>
			{Object.entries(monsterComposition).map(([id, monster]) => (
				<p key={id}>
					<span>{monster.name}</span>
					<span>
						Health: {monster.health.toString()}/
						{monster.currentHealth.toString()}
					</span>
					<span>Attack: {monster.attack.toString()}</span>
					<span>Count: {monster.count.toString()}</span>
				</p>
			))}
		</>
	);
}

export default MonsterArmyCards;
