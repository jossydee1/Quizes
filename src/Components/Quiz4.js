import React from "react";

function Quiz4() {
	const b = [3, 4, 5, 6, 7, 12, 9];
	const c = [4, 6, 2, 5, 7, 16];
	const d = [];
	const e = [];

	for (let i = 0; i < b.length; i++) {
		d[i] = b[i] + c[i];
		e[i] = b[i] + 7;
	}

	return (
		<div>
			<p>{d.join(", ")}</p>
			<p>{e.join(", ")}</p>
		</div>
	);
}

export default Quiz4;
