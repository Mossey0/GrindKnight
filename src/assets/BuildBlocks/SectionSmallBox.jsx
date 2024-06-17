import React from "react";

function SectionSmallBox(monster) {
	return (
		<button
			type="button"
			className="bg-slate-200 w-4/5 h-24 font-large font-medium"
		>
			{"Recruit"}
			<p>Cost: 10</p>
		</button>
	);
}

export default SectionSmallBox;
