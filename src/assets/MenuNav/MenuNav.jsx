import React from "react";
import MenuNavButtons from "./MenuNavButtons";

function MenuNav() {
	return (
		<div className="flex flex-wrap justify-around md:w-1/3">
			<MenuNavButtons
				name={"Hunt"}
				id={"Hunt"}
			/>
			<MenuNavButtons
				name={"Recruit"}
				id={"Recruit"}
			/>
			<MenuNavButtons
				name={"Upgrade"}
				id={"Upgrade"}
			/>
			<MenuNavButtons
				name={"Build"}
				id={"Build"}
			/>
			<MenuNavButtons
				name={"Explore"}
				id={"Explore"}
			/>
			<MenuNavButtons
				name={"Dungeon"}
				id={"Dungeon"}
			/>
		</div>
	);
}

export default MenuNav;
