import React from "react";
import SectionBlocks from "./assets/BuildBlocks/SectionBlocks";
import ImgBlock from "./assets/BuildBlocks/ImgBlock";
import DescriptionBlock from "./assets/BuildBlocks/DescriptionBlock";
import HungtingGrounds from "./assets/FightSection/Hunt/HungtingGrounds";

function GameContainer() {
	return (
		<div
			className="flex flex-col flex-wrap gap-5 md:gap-0 pt-12 pb-16 w-full h-full"
			id="game-container"
		>
			{false && (
				<>
					<DescriptionBlock />
					<SectionBlocks id={1} />
					<ImgBlock />
				</>
			)}
			{true && <HungtingGrounds />}
		</div>
	);
}

export default GameContainer;
