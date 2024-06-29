import React from "react";
import recruits from "./Recruit";

const RecruitCard = ({ name, rank, health, attack, isSelected }) => {
	const selected = isSelected ? "border" : "";

	return (
		<div
			className={`flex flex-col gap-2 hover:bg-opacity-25 p-2 rounded-md md:w-60 cursor-pointer w-1/3 ${selected} bg-sky-300 border-black`}
		>
			<h3 className="mb-2 text-xl">{name}</h3>
			<p>Rank: {rank}</p>
			<p>Health: {health}</p>
			<p>Power: {attack}</p>
		</div>
	);
};

export default RecruitCard;
