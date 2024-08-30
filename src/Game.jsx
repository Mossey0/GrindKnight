import React from "react";
import GameContainer from "./GameContainer";
import MenuNav from "./assets/MenuNav/MenuNav";
import Stats from "./assets/PlayerStats/Stats";
import MessageBox from "./assets/MessageBox/MessageBox";

function Game() {
	return (
		<div
			className="flex flex-col flex-wrap bg-black w-full min-h-dvh text-white"
			id="game-window"
		>
			<div className="flex justify-between items-center bg-black lg:h-12">
				<div className="flex justify-between">
					<span
						className="font-bold font-mono text-2xl text-yellow-500"
						id="game-name"
					>
						GrindKnight
					</span>
				</div>
				<MenuNav />
			</div>
			<Stats />
			<div className="lg:flex *:p-4 lg:*:w-1/2 h-5/6 *:h-80 lg:*:h-[800px]">
				<GameContainer />
			</div>
			<MessageBox />
		</div>
	);
}

export default Game;
