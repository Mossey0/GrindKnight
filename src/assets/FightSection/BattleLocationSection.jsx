import React, { useContext, useState } from "react";
import locations from "../LocationFiles.jsx/Locations";
import { GameContext } from "../../GameContext";
import LocationCards from "../LocationFiles.jsx/LocationCards";
import BattleSection from "./BattleSection";
import ActionScreenTab from "../BuildBlocks/ActionScreenTab";
import ActionScreenCardHolder from "../BuildBlocks/ActionScreenCardHolder";
import ActionScreenButtons from "../BuildBlocks/ActionScreenButtons";

const locationRanks = Object.keys(locations);

function BattleLocationSection() {
	const {
		inBattle,
		handleBattleSelect,
		handleMapChange,
		currentMapSelected,
		generateMonsterComposition,
	} = useContext(GameContext);
	const [selectLocation, setSelectLocation] = useState(null);
	const [selectTab, setSelectTab] = useState("F");

	const dangerLevel = (size) => {
		return size <= 3
			? "text-green-200"
			: size <= 6
				? "text-yellow-200"
				: size <= 12
					? "text-orange-200"
					: size <= 20
						? "text-black"
						: "text-black";
	};

	const dangerRank = (size) => {
		return size <= 7
			? 1
			: size <= 15
				? 2
				: size <= 25
					? 3
					: size <= 40
						? 4
						: size <= 60
							? 5
							: 6;
	};

	const handleTabSelect = (tab) => {
		setSelectTab(tab);
	};

	const handleSelectLocation = (id, mapObject) => {
		setSelectLocation(id);
		handleMapChange(mapObject);
		generateMonsterComposition(mapObject.rank, mapObject.size, null);
	};

	return (
		<>
			{!inBattle && (
				<div className="flex flex-col">
					<ActionScreenTab
						rankArray={locationRanks}
						selectFunctions={{ handleTabSelect, selectTab }}
					/>
					<ActionScreenCardHolder
						Cards={LocationCards}
						selectFunctions={{
							locations,
							selectTab,
							handleSelectLocation,
							selectLocation,
							dangerLevel,
							dangerRank,
						}}
					/>
					<ActionScreenButtons
						confirmButton={"Launch Battle"}
						buttonFunctions={{
							buttonFunction: handleBattleSelect,
						}}
					/>
				</div>
			)}
			{inBattle && <BattleSection currentMapSelected={currentMapSelected} />}
		</>
	);
}

export default BattleLocationSection;
