import React from "react";

// Know the dimension of your computer screen

function Quiz19() {
  const [show, setShow] = React.useState(true);

  // This method is static and won't display during resize until it is refreshed
  const TrackWidth = window.outerWidth;
  const TrackHeight = window.outerHeight;

  // This method allows dynamic display of the width as we resize the screen.
  // This is made possible through useEffect
  const [showHeight, setShowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setShowHeight(window.innerHeight);
    });
  }, []);

  const [showWidth, setShowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setShowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      {show && (
        <div>
          <p>The outer height of this screen is</p>
          <p>{TrackHeight}</p>
          <p>The inner height of this screen is</p>
          <p>{showHeight}</p>
          <br />
          <p>The outer width of this screen is</p>
          <p>{TrackWidth}</p>
          <p>The inner width of this screen is</p>
          <p>{showWidth}</p>
        </div>
      )}
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default Quiz19;
