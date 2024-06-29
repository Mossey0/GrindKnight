import React from "react";

function HuntingLocations({ name, rank, index }) {
	const colorClass = rankColor(rank);
	const selected = name === currentMap ? "border" : "";
	return (
		<div
			className={`flex flex-col gap-2 ${colorClass} hover:bg-opacity-25 p-2 rounded-md md:w-60 cursor-pointer w-1/3 ${selected} border-black`}
			key={index}
			onClick={() => handleChangeMap(name)}
		>
			<h3 className="mb-2 text-xl">{name}</h3>
			<p>
				rank: <span className="text-">{rank}</span>
			</p>
		</div>
	);
}

export default HuntingLocations;
