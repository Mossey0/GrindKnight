import React from "react";

function DescriptionBlock({ textContent }) {
	return (
		<div className="w-full lg:w-2/6 h-1/5 lg:h-full">
			<h1>Description</h1>
			<div>{textContent}</div>
		</div>
	);
}

export default DescriptionBlock;
