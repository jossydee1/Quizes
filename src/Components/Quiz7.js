import React from "react";

function Quiz7() {
	const ArraySummation = () => {
		const Arr = new Array(7, 8, 4, 9, 6, 2);

		return Arr.reduce((acc, cur) => acc + cur, 0);
	};

	function ArraySummation2() {
		const ar = [9, 3, 4, 6, 2, 9, 6];

		let sum = 0;

		for (let i = 0; i < ar.length; i++) {
			sum += ar[i];
		}
		return sum;
	}

	return (
		<div>
			<ArraySummation />
			<br />
			<ArraySummation2 />
		</div>
	);
}

export default Quiz7;
