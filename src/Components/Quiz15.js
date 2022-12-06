import React from "react";

function Quiz15() {
  // Conditional Rendering

  const [messages, setMessages] = React.useState(["a"]);
  const [isShow, setIsShow] = React.useState("");

  return (
    <div>
      {/* Method 1: This will display "0" if there's no message */}
      {messages.length && <h1>You have {messages.length} unread messages</h1>}

      {/* OR  */}
      {/* Method 2: This will display nothing if there's no messaged */}
      {messages.length > 0 && (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}{" "}
        </h1>
      )}

      {/* Method 3: This will display nothing if there's no messaged */}
      {messages.length === 0 ? (
        <h1>You have no messages</h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}
        </h1>
      )}
      {isShow && <h5>This is ReactJS conditional Rendering</h5>}
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Hide" : "Show"} Message
      </button>
    </div>
  );
}

export default Quiz15;
