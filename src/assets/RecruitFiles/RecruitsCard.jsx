import React from "react";
import recruits from "./Recruit";

const RecruitCard = ({
	name,
	rank,
	health,
	attack,
	cost,
	index,
	selectRecruit,
	handleChangeRecruit,
}) => {
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
	const selected = selectRecruit === name ? "border-black" : "border-white";

	return (
		<div
			className={`flex flex-col gap-2 ${colorClass} hover:bg-opacity-25 p-2 rounded-md md:w-60 cursor-pointer w-1/3 ${selected} border-2`}
			onClick={() => handleChangeRecruit(name)}
			key={index}
		>
			<h3 className="mb-2 text-xl">{name}</h3>
			<p>Rank: {rank}</p>
			<p>Health: {health}</p>
			<p>Power: {attack}</p>
			<p>Cost: {cost}</p>
		</div>
	);
};

export default RecruitCard;
