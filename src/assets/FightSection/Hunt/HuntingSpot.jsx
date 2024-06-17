import React from "react";

function HuntingSpot({ top, bottom, left, right }) {
	return (
		<div
			className="absolute bg-red-400 rounded-full w-24 h-24"
			style={{ top: top, bottom: bottom, left: left, right: right }}
		></div>
	);
}

export default HuntingSpot;
