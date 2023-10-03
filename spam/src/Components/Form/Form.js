import React, { useState } from "react";
import styles from "./Form.module.scss";
// import TextInput from "./../Input/Input.js";
// import MessageViewer from "./../MessageViewer/MessageViewer.js";

function Form() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (currentMessage) {
      setMessages([currentMessage, ...messages]);
      setCurrentMessage("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.viewer}>
          {messages.map((message, index) => (
            <p key={index} className={index === 0 ? styles.highlight : ""}>
              {message}
            </p>
          ))}
        </div>
        <input
          type="text"
          value={currentMessage}
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Form;
