import React from "react";
import SectionBlocks from "./assets/BuildBlocks/SectionBlocks";
import ImgBlock from "./assets/BuildBlocks/ImgBlock";
import DescriptionBlock from "./assets/BuildBlocks/DescriptionBlock";

function GameContainer() {
	return (
		<div
			className="flex flex-col flex-wrap gap-5 md:gap-0 pt-16 size-full"
			id="game-container"
		>
			<DescriptionBlock />
			<SectionBlocks id={1} />
			<ImgBlock />
		</div>
	);
}

export default GameContainer;
