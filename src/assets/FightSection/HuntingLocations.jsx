import React from "react";

function HuntingLocations({ name, tier, packSize }) {
	return (
		<div>
			<h3>{name}</h3>
			<p>Tier: {tier}</p>
			<p>Pack size multi: {packSize}</p>
		</div>
	);
}

export default HuntingLocations;
