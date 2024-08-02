import React from "react";
import GameContainer from "./GameContainer";
import MenuNav from "./assets/MenuNav/MenuNav";
import Stats from "./assets/PlayerStats/Stats";
import MessageBox from "./assets/MessageBox/MessageBox";

function Game() {
	return (
		<div
			className="flex flex-col bg-blue-950 w-full h-screen text-white"
			id="game-window"
		>
			<div className="flex justify-between items-center bg-gray-900 p-2">
				<span
					className="font-bold font-mono text-2xl text-yellow-500"
					id="game-name"
				>
					GrindKnight
				</span>
				<MenuNav />
			</div>
			<GameContainer />
			<MessageBox />
		</div>
	);
}

export default Game;
