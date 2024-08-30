import React, { useContext, useState } from "react";
import recruits from "./Recruit";
import { GameContext } from "../../GameContext";
import Decimal from "break_infinity.js";
import UnitCards from "./UnitCards";
import ActionScreenTab from "../BuildBlocks/ActionScreenTab";
import ActionScreenCardHolder from "../BuildBlocks/ActionScreenCardHolder";
import ActionScreenButtons from "../BuildBlocks/ActionScreenButtons";

const rankKeys = Object.keys(recruits);

function RecruitSection() {
	const [selectTab, setSelectTab] = useState("F");
	const [selectRecruit, setSelectRecruit] = useState(null);
	const [selectAmount, setSelectAmount] = useState(1);
	const {
		handleAddToArmy,
		playerStats,
		changePlayerStats,
		formatLargeNumber,
		addNewMessage,
	} = useContext(GameContext);

	const handleBuyRecruit = () => {
		if (selectRecruit) {
			const totalCost = new Decimal(selectAmount).times(selectRecruit.cost);
			if (playerStats.playerGold.gte(totalCost)) {
				changePlayerStats("playerGold", totalCost.negated());
				handleAddToArmy(
					selectRecruit.id,
					new Decimal(selectAmount),
					selectRecruit.name,
					selectRecruit.health,
					selectRecruit.attack
				);
				addNewMessage(`Hired ${selectAmount} ${selectRecruit.name}`);
			} else {
				addNewMessage(`Cannot afford to hire ${selectRecruit.name}`);
			}
		}
	};

	const handleTabSelect = (tab) => {
		setSelectTab(tab);
		setSelectRecruit(null);
	};

	const handleRecruitSelect = (recruitSelected, id) => {
		setSelectRecruit({ ...recruitSelected, id: id });
	};

	return (
		<div className="flex flex-col">
			<ActionScreenTab
				rankArray={rankKeys}
				selectFunctions={{ handleTabSelect, selectTab }}
			/>
			<ActionScreenCardHolder
				Cards={UnitCards}
				selectFunctions={{
					recruits,
					handleRecruitSelect,
					selectRecruit,
					formatLargeNumber,
					selectTab,
					selectAmount,
				}}
			/>
			<ActionScreenButtons
				buttonArray={[1, 5, 10, 50, 100, 1000]}
				confirmButton={"Confirm Recruitment"}
				buttonFunctions={{
					currentButton: selectAmount,
					selectButton: setSelectAmount,
					buttonFunction: handleBuyRecruit,
					buttonDisabled: !selectRecruit,
				}}
			/>
		</div>
	);
}

export default RecruitSection;
