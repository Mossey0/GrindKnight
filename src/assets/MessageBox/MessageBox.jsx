import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function MessageBox() {
	const { messageLog } = useContext(GameContext);
	return (
		<div className="flex flex-col border w-full h-1/6">
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
	);
}

export default MessageBox;
