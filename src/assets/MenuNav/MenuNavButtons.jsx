import React from "react";

function MenuNavButtons({ name, id }) {
	return (
		<button
			type="button"
			className="hover:bg-slate-100 rounded-sm w-20 hover:text-black transition-all duration-300"
			id={id}
		>
			{name}
		</button>
	);
}

export default MenuNavButtons;
