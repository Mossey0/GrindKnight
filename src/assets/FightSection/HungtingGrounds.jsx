import React, { useContext, useState } from "react";
import locations from "../LocationFiles.jsx/Locations";
import LocationCard from "./HuntingLocationCard";

function HungtingGrounds() {
	const [currentMap, setCurrentMap] = useState(null);
	const [huntingGroundNav, setHuntingGroundNav] = useState("Select");

	const handleChangeMap = (map) => {
		setCurrentMap(map);
	};

	return (
		<div className="relative flex flex-col items-center w-full md:w-3/5 h-96 md:h-full">
			<>
				{huntingGroundNav && (
					<>
						<h1 className="text-2xl">Hunting Grounds</h1>
						<div className="flex flex-wrap justify-center gap-6 pt-10 w-full h-5/6 overflow-y-auto">
							{Object.values(locations).map((location, index) => (
								<LocationCard
									key={index}
									name={location.name}
									rank={location.rank}
									isSelected={location.name === currentMap}
									onClick={() => handleChangeMap(location.name)}
								/>
							))}
						</div>
					</>
				)}
				<div className="mt-10">
					{huntingGroundNav && (
						<button
							type="button"
							className=""
						>
							Run
						</button>
					)}
					{huntingGroundNav && (
						<button
							type="button"
							className=""
						>
							Run
						</button>
					)}
				</div>
			</>
		</div>
	);
}

export default HungtingGrounds;
