import React from "react";

function ActionScreenTab({ rankArray, selectFunctions }) {
	return (
		<div className="flex gap-2">
			{rankArray.map((rank, index) => {
				return (
					<div
						className={`border border-black p-2 ${selectFunctions.selectTab == rank ? "border-purple-600" : ""}`}
						key={index}
						onClick={() => selectFunctions.handleTabSelect(rank)}
					>
						{rank}
					</div>
				);
			})}
		</div>
	);
}

export default ActionScreenTab;
