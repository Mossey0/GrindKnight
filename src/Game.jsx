import React from "react";
import "./App.css";
import GameContainer from "./GameContainer";
import MenuNav from "./assets/MenuNav/MenuNav";
import Stats from "./assets/BuildBlocks/Stats";

function Game() {
	return (
		<div
			className="md:w-screen md:h-screen"
			id="game-window"
		>
			<div className="flex justify-between items-center bg-gray-700 p-2 md:w-full md:h-12 text-white">
				<span
					className="font-bold font-mono text-2xl"
					id="game-name"
				>
					GrindKnight
				</span>
				<MenuNav />
			</div>
			<Stats />
			<GameContainer />
		</div>
	);
}

export default Game;
