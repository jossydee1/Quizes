import React from "react";

//  Giving an array of strings, return an array where the first letter of each string is capitalised

function Quiz9() {
  const AB = new Array("jesus", "baddest", "developer", "give");

  const capitalAB = AB.map((item) => item[0].toUpperCase() + item.substring(1)).join(" ")

  // OR

  const capitalAB2 = AB.map(function(item) {
    return item[0].toUpperCase() + item.slice(1)
  }).join(' ');

  return <div>
    <h1>{capitalAB}</h1>
    <h1>{capitalAB2}</h1>
  </div>;
}

export default Quiz9;
