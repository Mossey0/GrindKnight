import React from "react";

function SectionBlocks(id) {
	return (
		<div className="relative flex flex-col items-center w-full md:w-3/5 h-96 md:h-full">
			<h1 className="text-2xl">Rectruits</h1>
			<div className="flex flex-wrap justify-center gap-6 pt-10 w-full h-5/6 overflow-y-auto"></div>
			<div className="mt-10">
				<button
					type="button"
					className=""
				>
					Recuit now
				</button>
			</div>
		</div>
	);
}

export default SectionBlocks;
