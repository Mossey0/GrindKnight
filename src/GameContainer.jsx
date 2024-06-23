import React from "react";
import SectionBlocks from "./assets/BuildBlocks/SectionBlocks";
import ImgBlock from "./assets/BuildBlocks/ImgBlock";
import DescriptionBlock from "./assets/BuildBlocks/DescriptionBlock";
import HungtingGrounds from "./assets/FightSection/HungtingGrounds";

function GameContainer() {
	return (
		<div
			className="flex flex-col flex-wrap gap-5 md:gap-0 w-full h-4/5 md:h-11/12"
			id="game-container"
		>
			{false && (
				<>
					<DescriptionBlock />
					<SectionBlocks id={1} />
					<ImgBlock />
				</>
			)}
			{true && (
				<>
					<DescriptionBlock />
					<HungtingGrounds />
					<ImgBlock />
				</>
			)}
		</div>
	);
}

export default GameContainer;
