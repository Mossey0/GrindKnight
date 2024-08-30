import React, { useContext } from "react";
import DescriptionBlock from "./assets/BuildBlocks/DescriptionBlock";
import { GameContext } from "./GameContext";
import RecruitSection from "./assets/RecruitFiles/RecruitSection";
import BattleLocationSection from "./assets/FightSection/BattleLocationSection";
import ActionScreen from "./assets/BuildBlocks/ActionScreen";
import RecruitTitle from "./assets/RecruitFiles/RecruitTitle";
import HomeTitle from "./assets/Home/HomeTitle";
import Home from "./assets/Home/Home";
import BattleTitle from "./assets/FightSection/BattleTitle";

function GameContainer() {
	const { currentNav } = useContext(GameContext);
	return (
		<>
			{currentNav === "Home" && (
				<>
					<DescriptionBlock />
					<ActionScreen
						Title={HomeTitle}
						Component={Home}
					/>
				</>
			)}
			{currentNav === "Battle" && (
				<>
					<DescriptionBlock />
					<ActionScreen
						Title={BattleTitle}
						Component={BattleLocationSection}
					/>
				</>
			)}
			{currentNav === "Recruit" && (
				<>
					<DescriptionBlock />
					<ActionScreen
						Title={RecruitTitle}
						Component={RecruitSection}
					/>
				</>
			)}
			{currentNav === "Upgrade" && (
				<>
					<DescriptionBlock />
				</>
			)}
			{currentNav === "Build" && (
				<>
					<DescriptionBlock />
				</>
			)}
			{currentNav === "Explore" && (
				<>
					<DescriptionBlock />
				</>
			)}
			{currentNav === "Dungeon" && (
				<>
					<DescriptionBlock />
				</>
			)}
		</>
	);
}

export default GameContainer;
