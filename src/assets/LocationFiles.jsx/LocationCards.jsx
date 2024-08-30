import React from "react";
import { Radius, Star } from "lucide-react";

function LocationCards({ selectFunctions }) {
	const {
		locations,
		selectTab,
		handleSelectLocation,
		selectLocation,
		dangerLevel,
		dangerRank,
	} = selectFunctions;
	return Object.entries(locations[selectTab]).map(([id, map]) => (
		<div
			className={`${
				selectLocation === id ? "border-purple-500" : "border-black"
			} hover:opacity-80 p-4 rounded cursor-pointer`}
			key={id}
			onClick={() => handleSelectLocation(id, { ...map })}
		>
			<h1 className="mb-2 font-bold text-xl">{map.name}</h1>
			<p className="flex items-center gap-2">
				<span>Danger level:</span>
				<span className="flex">
					{Array.from({ length: dangerRank(map.size) }, (_, index) => {
						return (
							<Star
								size={16}
								key={index}
								className={`${dangerLevel(map.size)} mr-1 `}
							/>
						);
					})}
				</span>
			</p>
			<p className="flex items-center gap-2">
				<span>Monster Density:</span>
				<span className="flex items-center">
					<Radius
						size={16}
						className={`${dangerLevel(map.size)} mr-1 `}
					/>{" "}
					{map.size}
				</span>
			</p>
		</div>
	));
}

export default LocationCards;
