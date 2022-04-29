import React from "react";

function Quiz1() {
	/////////// Reversing Array ///

	const ar = [" Goo ", " okkkk ", " try", "   well "];
	const reverse = ar.reverse();

	console.log(ar);
	console.log(reverse);
	document.write(reverse[2]);
	document.write(ar.length);

	const vic = [];
	for (let v = 6; v < 8; ) {
		document.write(v++);
		vic.push(v < 5);
		document.write(vic);
	}

	return <div>Quiz1</div>;
}

export default Quiz1;
