import React, { useState } from "react";

function Quiz12() {
  const [stateArray, setStateArray] = useState(["thing 1,", " thing 2"]);

  const handleArray = () => {
    setStateArray((prevstateArray) => [
      ...prevstateArray,
      `, thing ${prevstateArray.length + 1}`,
    ]);
  };

  return (
    <div>
      <button onClick={handleArray}>Add</button>
      <p>{stateArray}</p>
    </div>
  );
}

export default Quiz12;
