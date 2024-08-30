import React from "react";
import MenuNavButtons from "./MenuNavButtons";

function MenuNav() {
	return (
		<div className="flex flex-wrap justify-around w-1/2">
			<MenuNavButtons
				name={"Home"}
				id={"Home"}
			/>
			<MenuNavButtons
				name={"Battle"}
				id={"Battle"}
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
