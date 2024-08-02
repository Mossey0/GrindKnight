import React, { useContext } from "react";
import { GameContext } from "../../GameContext";

function MenuNavButtons({ name, id }) {
	const { changeNavigation } = useContext(GameContext);

	return (
		<button
			type="button"
			className="hover:bg-slate-100 active:bg-slate-500 rounded-sm w-20 h-6 hover:text-black transition-all duration-300"
			id={id}
			onClick={() => changeNavigation(id)}
		>
			{name}
		</button>
	);
}

export default MenuNavButtons;
