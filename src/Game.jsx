import React from "react";
import "./App.css";
import GameContainer from "./GameContainer";
import MenuNav from "./assets/MenuNav/MenuNav";
import Stats from "./assets/BuildBlocks/Stats";

function Game() {
	return (
		<div
			className="relative md:w-screen md:h-screen"
			id="game-window"
		>
			<h1
				className="bg-gray-300 p-2 w-full h-12 font-bold font-mono text-2xl"
				id="game-name"
			>
				GrindKnight
			</h1>
			<Stats />
			<GameContainer />
			<MenuNav />
		</div>
	);
}

export default Game;
