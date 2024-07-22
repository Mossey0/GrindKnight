import React from "react";
import GameContainer from "./GameContainer";
import MenuNav from "./assets/MenuNav/MenuNav";
import Stats from "./assets/BuildBlocks/Stats";

function Game() {
	return (
		<div
			className="flex flex-col bg-slate-800 md:w-screen md:h-screen overflow-x-auto"
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
