import React from "react";

function ActionScreenButtons({ buttonArray, confirmButton, buttonFunctions }) {
	return (
		<div className="flex justify-around *:cursor-pointer">
			<div className="flex justify-between gap-2 *:transition-all *:duration-300">
				{buttonArray &&
					buttonArray.map((button) => {
						return (
							<div
								className={`hover:border-purple-500 p-2 border border-black rounded ${buttonFunctions.currentButton === button ? "border-purple-600" : ""}`}
								onClick={() => buttonFunctions.selectButton(button)}
							>
								{button}
							</div>
						);
					})}
			</div>
			<div
				className="hover:border-purple-600 p-2 border border-black rounded-lg transition-all duration-400"
				onClick={() => buttonFunctions.buttonFunction()}
			>
				{confirmButton}
			</div>
		</div>
	);
}

export default ActionScreenButtons;
