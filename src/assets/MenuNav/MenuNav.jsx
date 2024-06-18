import React from "react";
import MenuNavButtons from "./MenuNavButtons";

function MenuNav() {
	return (
		<div className="bottom-0 absolute flex flex-wrap justify-around items-center w-full h-92 md:h-24">
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
