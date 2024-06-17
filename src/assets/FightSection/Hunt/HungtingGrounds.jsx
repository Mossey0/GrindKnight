import React from "react";
import HuntingSpot from "./HuntingSpot";

function HungtingGrounds() {
	return (
		<div className="relative bg-green-400 size-full">
			<HuntingSpot
				top={"12px"}
				right={"100px"}
			/>
			<HuntingSpot
				bottom={"24px"}
				left={"120px"}
			/>
			<HuntingSpot
				top={1 / 2}
				left={1 / 2}
			/>
		</div>
	);
}

export default HungtingGrounds;
