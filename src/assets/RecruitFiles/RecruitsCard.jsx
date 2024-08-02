import React from "react";

const RecruitCard = ({ stats }) => {
	return (
		<div className="border rounded">
			<h3 className="text-xl">{stats.name}</h3>
			<p>Rank: {stats.rank}</p>
			<p>Health: {stats.health}</p>
			<p>Power: {stats.attack}</p>
			<p>Cost: {stats.cost}</p>
		</div>
	);
};

export default RecruitCard;
