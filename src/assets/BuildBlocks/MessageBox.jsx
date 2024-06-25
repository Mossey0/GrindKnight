import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function ImgBlock() {
	const { messageLog, changeMessageLog } = useContext(GameContext);
	return (
		<div className="flex flex-col items-center gap-1 p-4 w-full md:w-1/5 h-96 md:h-full">
			<button onClick={() => changeMessageLog("add", "awodnajwndaowd")}>
				Test add
			</button>
			<button onClick={() => changeMessageLog("remove")}>Test remove</button>
			<div className="border w-full h-full">
				<h2>messages</h2>
				<div>
					{messageLog.map((messageTemplate, index) => {
						return (
							<p key={`${messageTemplate.id}-${index}`}>
								{messageTemplate.text}
								{messageTemplate.id}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ImgBlock;
