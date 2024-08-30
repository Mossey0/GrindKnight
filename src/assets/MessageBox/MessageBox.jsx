import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function MessageBox() {
	const { messageLog } = useContext(GameContext);
	return (
		<div className="h-20 lg:h-40 overflow-auto">
			<h2>Message Log</h2>
			<div>
				{messageLog.map((message) => {
					return <p key={`${message.id}`}>{message.text}</p>;
				})}
			</div>
		</div>
	);
}

export default MessageBox;
