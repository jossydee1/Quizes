import React, { useState } from "react";

// Generate data randomly

const data = [
  {
    name: "joe",
    gender: "male",
  },
  {
    name: "Tope",
    gender: "female",
  },
  {
    name: "Shade",
    gender: "female",
  },
  {
    name: "Taiwo",
    gender: "male",
  },
  {
    name: "Tessy",
    gender: "female",
  },
  {
    name: "Lissa",
    gender: "female",
  },
  {
    name: "Roben",
    gender: "male",
  },
];

const RandomData = () => {
  //   return alert("i was clicked");
  const ab = data;
  const number = Math.floor(Math.random() * ab.length);
  const name = ab[number].name;
  //   return answer;
  console.log(number);
  console.log(name);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

function Quiz11() {
  const [counter, setCounter] = useState(1);
  const [isgoing, setIsgoing] = useState(false);
  return (
    <div>
      {/* <br /> */}
      <div>
        <RandomData />
        <button>Click Me</button>
      </div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <div>
        <button
          onClick={() => {
            setIsgoing(!isgoing);
          }}
        >
          {isgoing === true ? "Yes" : "No"}
        </button>
      </div>
    </div>
  );
}

export default Quiz11;
