import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game.jsx";
import "./index.css";
import { GameProvider } from "./GameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GameProvider>
			<Game />
		</GameProvider>
	</React.StrictMode>
);
