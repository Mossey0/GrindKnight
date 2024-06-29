import React, { useContext, useState } from "react";
import locations from "../LocationFiles.jsx/Locations";
import LocationCard from "../LocationFiles.jsx/HuntingLocationCard";

function BattleLocationSection() {
	const [currentMap, setCurrentMap] = useState(null);
	const [battleCurrent, setBattleCurrent] = useState("Select");

	const handleChangeMap = (map) => {
		setCurrentMap(map);
	};

	return (
		<div className="relative flex flex-col items-center w-full md:w-3/5 h-96 md:h-full">
			{battleCurrent && (
				<>
					<h1 className="text-2xl">Hunting Grounds</h1>
					<div className="flex flex-wrap gap-6 pt-10 w-full h-5/6 overflow-y-auto">
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
			<div className="mt-10">
				{battleCurrent && (
					<button
						type="button"
						className=""
					>
						Run
					</button>
				)}
				{battleCurrent && (
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
