import React from "react";

const LocationCard = ({ name, rank, isSelected, onClick }) => {
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

	const colorClass = rankColor(rank);
	const selected = isSelected ? "border" : "";

	return (
		<div
			className={`flex flex-col gap-2 ${colorClass} hover:bg-opacity-25 p-2 rounded-md md:w-60 cursor-pointer w-1/3 ${selected} border-black`}
			onClick={onClick}
		>
			<h3 className="mb-2 text-xl">{name}</h3>
			<p>
				rank: <span className="text-">{rank}</span>
			</p>
		</div>
	);
};

export default LocationCard;
