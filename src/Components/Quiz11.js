import React from "react";

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
  return <h1>{name}</h1>;
};

function Quiz11() {
  return (
    <div>
      <br />
      <RandomData />
          <button onClick={RandomData}>Click Me</button>
          
    </div>
  );
}

export default Quiz11;
