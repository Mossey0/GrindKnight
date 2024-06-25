import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function MenuNavButtons({ name, id }) {
	const { changeNavigation } = useContext(GameContext);

	return (
		<button
			type="button"
			className="hover:bg-slate-100 rounded-sm w-20 hover:text-black transition-all duration-300"
			id={id}
			onClick={() => changeNavigation(id)}
		>
			{name}
		</button>
	);
}

export default MenuNavButtons;
