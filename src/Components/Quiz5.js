import React from "react";

function Quiz5() {
	// performing multiplication of all elements of an array
	// following regular array method. Note the multiplication
	// starts from 1 * 3 * 4 * 55.....hence the reason for "let d = 1"
	function Method1() {
		const b = [3, 4, 55, 6, 7, 12, 9];
		let d = 1;
		for (let i = 0; i < b.length; i++) {
			d *= b[i];
		}

		return d;
	}

	function Method2() {
		//  using reduce
		const c = [2, 3, 4, 7];
		let dd = c.reduce((accumulator, current) => accumulator * current, 1);
		// where the initial value is 1

		return dd;
	}

	const Method3 = (art) => {
		art = new Array(2, 5, 6, 8, 3, 4);

		let mult = 1;

		for (let i = 0; i < art.length; i++) {
			mult *= art[i];
		}
		return mult;
	};

	const Method4 = () => {
		const arit = [4, 5, 3, 5, 4, 6, 2];

		const multiply = arit.reduce((acc, cur) => acc * cur, 1);

		return multiply;
	};
	return (
		<div>
			<Method1 />
			<br />
			<Method2 />
			<br />
			<Method3 />

			<br />
			<Method4 />
		</div>
	);
}

export default Quiz5;
