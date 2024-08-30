import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function DescriptionBlock() {
	const { itemText, descriptionText, currentNav } = useContext(GameContext);
	return (
		<div className="overflow-auto">
			<h1>{currentNav}</h1>
			<p></p>
			<p></p>
		</div>
	);
}

export default DescriptionBlock;
