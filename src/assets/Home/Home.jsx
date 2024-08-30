import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function Home() {
	const { playerStats, playerArmy } = useContext(GameContext);
	return (
		<div>
			<ul>
				<li>Gold: {playerStats.playerGold.toString()}</li>
				<li>Income: </li>
				<li>Army Count: </li>
				<li>Enemies Killed: </li>
				<li>Fallen Soldiers: </li>
				<li>Equipment: </li>
				<li>Artifacts: </li>
				<li></li>
			</ul>
		</div>
	);
}

export default Home;
