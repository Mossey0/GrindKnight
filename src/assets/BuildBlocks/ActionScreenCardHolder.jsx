import React from "react";

function ActionScreenCardHolder({ Cards, selectFunctions }) {
	return (
		<div className="flex flex-col gap-3 *:mt-1 *:border h-80 lg:h-[600px] *:transition-all *:duration-500 overflow-y-auto">
			<Cards selectFunctions={selectFunctions} />
		</div>
	);
}

export default ActionScreenCardHolder;
