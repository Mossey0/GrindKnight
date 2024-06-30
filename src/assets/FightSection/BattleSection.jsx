import React, { useEffect, useState } from "react";

function BattleSection({ mapProperties }) {
	const [search, setSearch] = useState(0);
	const [searchFeedback, setSearchFeedback] = useState("Searching");

	useEffect(() => {
		const searchTimer = setInterval(() => {
			setSearch((prevBar) => {
				const newVal = prevBar + 1;
				if (newVal >= 20) {
					clearInterval(searchTimer);
					return 20;
				}
				return newVal;
			});
			setSearchFeedback((prevFeedback) => {
				if (prevFeedback === "...Searching") {
					return "Searching";
				} else {
					return "." + prevFeedback;
				}
			});
		}, 300);
		return () => clearInterval(searchTimer);
	}, []);

	return (
		<>
			<h1 className="text-2xl">BattleScreen</h1>
			<div className="flex justify-center w-full h-5/6">
				{search !== 20 && <h2 className="p-10 text-4xl">{searchFeedback}</h2>}
				{search === 20 && <div></div>}
			</div>
		</>
	);
}

export default BattleSection;
