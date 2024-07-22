import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function ImgBlock() {
	const { messageLog } = useContext(GameContext);
	return (
		<div className="flex flex-col items-center gap-1 p-4 w-full md:w-1/5 h-96 md:h-full">
			<div className="w-full h-full">
				<h2>Message Log</h2>
				<div>
					{messageLog.map((message) => {
						return (
							<p key={`${message.id}`}>
								{message.text}
								{message.id}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ImgBlock;
