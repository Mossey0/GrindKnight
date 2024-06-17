import React from "react";

function ImgBlock() {
	return (
		<div className="flex flex-col items-center gap-1 p-4 w-full md:w-1/3 h-96 md:h-full">
			<div className="bg-slate-300 w-2/3 h-1/2"></div>
			<div className="border w-full h-1/2"> Log </div>
		</div>
	);
}

export default ImgBlock;
