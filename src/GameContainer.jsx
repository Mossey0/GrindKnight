import React, { useContext } from "react";
import SectionBlocks from "./assets/BuildBlocks/SectionBlocks";
import DescriptionBlock from "./assets/BuildBlocks/DescriptionBlock";
import { GameContext } from "./GameContext";
import RecruitSection from "./assets/RecruitFiles/RecruitSection";
import BattleLocationSection from "./assets/FightSection/BattleLocationSection";

function GameContainer() {
	const { currentNav } = useContext(GameContext);
	return (
		<div
			className="flex pt-5 h-4/5"
			id="game-container"
		>
			{currentNav === "Home" && (
				<>
					<div className="flex flex-wrap w-full h-5/6">
						<DescriptionBlock textContent={1} />
						<SectionBlocks />
					</div>
				</>
			)}
			{currentNav === "Recruit" && (
				<>
					<div className="flex flex-wrap w-full">
						<DescriptionBlock textContent={1} />
						<SectionBlocks component={RecruitSection} />
					</div>
				</>
			)}
			{currentNav === "Hunt" && (
				<>
					<div className="flex flex-wrap w-full h-5/6">
						<DescriptionBlock textContent={1} />
						<SectionBlocks component={BattleLocationSection} />
					</div>
				</>
			)}
		</div>
	);
}

export default GameContainer;
