import React, { useContext } from "react";
import SectionBlocks from "./assets/BuildBlocks/SectionBlocks";
import MessageBox from "./assets/BuildBlocks/MessageBox";
import DescriptionBlock from "./assets/BuildBlocks/DescriptionBlock";
import { GameContext } from "./GameContext";
import RecruitSection from "./assets/RecruitFiles/RecruitSection";
import BattleLocationSection from "./assets/FightSection/BattleLocationSection";

function GameContainer() {
	const { currentNav } = useContext(GameContext);
	return (
		<div
			className="flex flex-col flex-wrap gap-5 md:gap-0 w-full h-4/5 md:h-11/12"
			id="game-container"
		>
			{currentNav === "Home" && (
				<>
					<DescriptionBlock />
					<SectionBlocks id={1} />
					<MessageBox />
				</>
			)}
			{currentNav === "Recruit" && (
				<>
					<DescriptionBlock />
					<RecruitSection />
					<MessageBox />
				</>
			)}
			{currentNav === "Hunt" && (
				<>
					<DescriptionBlock />
					<BattleLocationSection />
					<MessageBox />
				</>
			)}
		</div>
	);
}

export default GameContainer;
