import React, { useContext, useRef, useState } from "react";
import locations from "../LocationFiles.jsx/Locations";
import LocationCard from "../LocationFiles.jsx/HuntingLocationCard";
import BattleSection from "./BattleSection";

function BattleLocationSection() {
	const [currentMap, setCurrentMap] = useState(null);
	const [battleCurrent, setBattleCurrent] = useState("select");
	const selectMapData = useRef({});

	const handleChangeMap = (map, mapProperties) => {
		selectMapData.current = [...mapProperties];
		setCurrentMap(map);
	};

	return (
		<div className="relative flex flex-col items-center w-full md:w-3/5 md:h-full">
			{battleCurrent === "select" && (
				<>
					<h1 className="text-2xl">Hunting Grounds</h1>
					<div className="flex flex-wrap gap-6 pt-10 w-full md:h-5/6 overflow-y-auto">
						{Object.entries(locations).map(([rank, locations], index) => (
							<div
								className="w-full"
								key={index}
							>
								<h1 className="text-2xl">{rank}</h1>
								<div className="flex flex-wrap gap-2 w-full">
									{Object.entries(locations).map(([name, location], index) => {
										return (
											<LocationCard
												name={location.name}
												rank={location.rank}
												currentMap={currentMap}
												key={index}
												mapProperties={[
													location.name,
													location.size,
													location.rank,
												]}
												handleChangeMap={handleChangeMap}
											/>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</>
			)}
			{battleCurrent === "battle" && (
				<BattleSection mapProperties={selectMapData.current} />
			)}
			<div className="mt-10">
				{currentMap !== null && (
					<button
						type="button"
						className=""
						onClick={() => setBattleCurrent("battle")}
					>
						Run map
					</button>
				)}
				{battleCurrent === "battle" && (
					<button
						type="button"
						className=""
					>
						Run
					</button>
				)}
			</div>
		</div>
	);
}

export default BattleLocationSection;
