import React from "react";

function Quiz8() {
	let array = [6, 5, 8, 9, 3, 4, 12, 6];

	let arr2 = [];
	for (let i = 0; i < array.length; i++) {
		// arr2 += array[i] + 0;
		if (array[i] % 2 == 0) {
			arr2[i] += array[i] + 1;
		} else return;
		array[i] += array[i] + 2;
	}
	return <div>{arr2}</div>;
}

export default Quiz8;
