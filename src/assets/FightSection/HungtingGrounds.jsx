import React, { useContext, useState } from "react";
import locations from "../LocationFiles.jsx/Locations";

function HungtingGrounds() {
	const [currentMap, setCurrentMap] = useState(null);
	const [huntingGroundNav, setHuntingGroundNav] = useState("Select");

	const handleChangeMap = (map) => {
		setCurrentMap(map);
	};

	const rankColor = (rank) => {
		return rank === "F"
			? "bg-blue-100"
			: rank === "D"
				? "bg-yellow-100"
				: rank === "C"
					? "bg-orange-200"
					: rank === "B"
						? "bg-red-200"
						: rank === "A"
							? "bg-purple-300"
							: rank === "S"
								? "bg-orange-300"
								: rank === "SS"
									? "bg-green-400"
									: rank === "SSS"
										? "bg-red-400"
										: rank === "X"
											? "bg-purple-600"
											: "";
	};

	const locationCard = (name, rank, index) => {
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
	};
	return (
		<div className="relative flex flex-col items-center w-full md:w-3/5 h-96 md:h-full">
			<>
				{huntingGroundNav && (
					<>
						<h1 className="text-2xl">Hunting Grounds</h1>
						<div className="flex flex-wrap justify-center gap-6 pt-10 w-full h-5/6 overflow-y-auto">
							{Object.values(locations).map((location, index) => {
								return locationCard(location.name, location.rank, index);
							})}
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
