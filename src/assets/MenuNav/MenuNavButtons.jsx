import React from "react";

function MenuNavButtons({ name, id }) {
	return (
		<button
			type="button"
			className=""
			id={id}
		>
			{name}
		</button>
	);
}

export default MenuNavButtons;
