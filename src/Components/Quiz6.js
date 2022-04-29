import React from "react";

function Quiz6() {
	const A = [2, 5, 3, 8, 2, 6, 7, 9];
	let odd = 0;
	let even = 0;
	let AB = [];
	const AA = () => {
		// for (let i = 0; i < A.length; i++) {
		// 	// AB[i] = A[i] + 3;
		// 	if (A % 2 == 1) {
		// 		AB = A;
		// 	}
		// 	// else return (AB = A[i]);
		// }
		// return AB.join(", ");

		const arr = new Array(3, 2, 5, 4);
		let arrAdd = 0;
		let arrMinus = 0;

		let arrSquare = 0;
		let arrMultiply = [];
		let arrPower = 1;
		let x = [];
		for (let i = 0; i < arr.length - 3; ++i) {
			arrAdd += arr[i];
			arrMinus -= arr[i];
			arrMultiply[i] = arr[i] - arr[i];
			arrPower = Math.pow(arr[0] * arr[0]);
			x = arrMultiply.join(" ");
		}
		if (x > arrAdd) {
			return x;
		} else {
			return arrAdd;
		}
	};

	// if (A[i] % 2 === 1) {
	// 	odd = A[i];
	// } else even = A[i];

	return (
		<div>
			<AA />
		</div>
	);
}

export default Quiz6;
