import React from "react";

function Quiz3() {
	// Using the JavaScript language, have the function LetterCapitalize(str)
	// take the str parameter being passed and capitalize the first
	// letter of each word. Words will be separated by only one space.

	function LetterCapitalize(str) {
		str = ["good", "how", "done"];

		const cap = str
			.map((item) => item.charAt(0).toUpperCase() + item.substring(1))
			.join(" ");

		return cap;
	}

	// Using the JavaScript language, have the function LetterCapitalize(str)
	// take the str parameter being passed and minuscule( make lowerCase) the first
	// letter of each word and capitalise other letters. Words will be separated by only coma and one space.

	function LetterCapitalize2(str) {
		str = ["wooooo", "fineee", "niceeee"];

		return str
			.map(
				(item) => item.charAt(0).toLowerCase() + item.substring(1).toUpperCase()
			)
			.join(",  ");
	}

	// Using the JavaScript language, have the function LetterCapitalize(str)
	// take the str parameter being passed and capitalize the forth
	// letter of each word. Words will be separated by only one space.

	function LetterCapitalize3(str) {
		str = new Array("comin", "getit", "begme");

		return str
			.map(
				(item) =>
					item.charAt(0) +
					item.charAt(1) +
					item.charAt(2) +
					item.charAt(3).toUpperCase() +
					item.substring(4)
			)
			.join(" ");
	}

	function Test() {
		var tt = new Array("hgsdh", "vyukfyd", "vfjhvihv");

		return tt.map((item) => item.charAt(2).toUpperCase());
	}

	return (
		<div>
			<LetterCapitalize />
			<br />
			<LetterCapitalize2 />
			<br />
			<LetterCapitalize3 />
			<br />
			<Test />
		</div>
	);
}

export default Quiz3;
