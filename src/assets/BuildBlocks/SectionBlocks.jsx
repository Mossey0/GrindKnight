import React from "react";

function SectionBlocks({ component: Component, ...props }) {
	if (!Component) {
		return (
			<div className="w-full lg:w-4/6 h-3/5 lg:h-full">
				<p className="text-white"></p>
			</div>
		);
	}

	return (
		<div className="w-full lg:w-4/6 h-4/5 lg:h-full">
			<Component {...props} />
		</div>
	);
}

export default SectionBlocks;
