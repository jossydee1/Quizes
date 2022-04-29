import React, { useState } from "react";

function Quiz2() {
	////////// Setting "ON" and "OFF" button toggle ////////
	const [on, setOn] = useState(true);

	return (
		<div>
			<button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
		</div>
	);
}

export default Quiz2;
