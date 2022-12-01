import React from "react";
import image from "../Resources/heart-filled.png";
import filled from "../Resources/heart-filled.png";
import empty from "../Resources/heart-empty.png";

function Quiz13() {
  // Toggling favorite button using state

  const [contact, setContact] = React.useState({
    firstname: "Joe",
    lastname: "Odulesi",
    profession: "Software Engineer",
    isFavorite: false,
  });

  let handlefavorite = contact.isFavorite
    ? "heart-filled.png"
    : "heart-grey.png";
  console.log(handlefavorite);

  const handleChange = () => {
    setContact((previsFavourite) => {
      return {
        ...previsFavourite,
        isFavorite: !previsFavourite.isFavorite,
      };
    });
  };

  return (
    <div>
      <img src="./images/joe.png" style={{ width: "300px" }} />
      <h1>
        {contact.firstname} {contact.lastname}{" "}
      </h1>
      <h1>{contact.profession}</h1>
      <div>
        <p>Click to like</p>
        {/* Note: To use this partern for image path in React, the image folder  must be in the public folder */}
        <img
          src={`../images/${handlefavorite}`}
          onClick={handleChange}
          style={{ width: "50px" }}
        />
      </div>
    </div>
  );
}

export default Quiz13;
