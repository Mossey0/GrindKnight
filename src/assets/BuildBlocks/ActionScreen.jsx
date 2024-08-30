import React from "react";

function ActionScreen({ Title, Component }) {
	return (
		<div className="flex flex-col">
			<div className="">
				<Title />
			</div>
			<div className="mt-2">
				<Component />
			</div>
		</div>
	);
}

export default ActionScreen;
