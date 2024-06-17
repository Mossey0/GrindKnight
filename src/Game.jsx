import React from "react";
import "./App.css";
import GameContainer from "./GameContainer";

function Game() {
	return (
		<div
			className="md:w-screen md:h-screen"
			id="game-window"
		>
			<h1
				className="absolute bg-gray-300 p-2 w-full font-bold font-mono text-2xl"
				id="game-name"
			>
				GrindKnight
			</h1>

			<GameContainer />
		</div>
	);
}

export default Game;
