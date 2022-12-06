import React from "react";

const data = [
  {
    id: 1,
    state: true,
    state1: true,
    name: "A",
  },
  {
    id: 2,
    state: false,
    name: "B",
  },
  {
    id: 3,
    state: true,
    name: "C",
  },
  {
    id: 4,
    state: false,
    name: "D",
  },
  {
    id: 5,
    state: true,
    name: "E",
  },
  {
    id: 6,
    state: false,
    name: "F",
  },
  {
    id: 7,
    state: true,
    name: "G",
  },
  {
    id: 8,
    state: false,
    name: "H",
  },
  {
    id: 9,
    state: true,
    name: "I",
  },
  {
    id: 10,
    state: false,
    name: "J",
  },
  {
    id: 11,
    state: true,
    name: "K",
  },
  {
    id: 12,
    state: false,
    name: "L",
  },
  {
    id: 13,
    state: true,
    name: "M",
  },
  {
    id: 14,
    state: false,
    name: "N",
  },
  {
    id: 15,
    state: true,
    name: "O",
  },
  {
    id: 16,
    state: false,
    name: "P",
  },
  {
    id: 17,
    state: true,
    name: "Q",
  },
  {
    id: 18,
    state: false,
    name: "R",
  },
  {
    id: 19,
    state: true,
    name: "S",
  },
  {
    id: 20,
    state: false,
    name: "T",
  },
  {
    id: 21,
    state: true,
    name: "U",
  },
  {
    id: 22,
    state: false,
    name: "V",
  },
  {
    id: 23,
    state: true,
    name: "W",
  },
  {
    id: 24,
    state: false,
    name: "X",
  },
  {
    id: 25,
    state: true,
    name: "Y",
  },
  {
    id: 26,
    state: false,
    name: "Z",
  },
];

const Square = (props) => {
  const [flip, setFlip] = React.useState(props.status1);

  function Change() {
    setFlip((pre) => !pre);
  }

  return (
    <span
      onClick={Change}
      style={{
        backgroundColor: props.colour ? "green" : "red",
        backgroundColor: flip ? "green" : "red",
        margin: "20px",
        padding: "80px",
        width: "50px",
      }}
    >
      {props.naming}
    </span>
  );
};

function Quiz14() {
  const [box, setBox] = React.useState(data);

  // OR

  //   const box = data;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        margin: "100px 20px 0 200px",
        justifyContent: "center",
      }}
    >
      {box.map((item) => {
        return <Square key={data.id} colour={item.state} naming={item.name} />;
      })}
    </div>
  );
}

export default Quiz14;
