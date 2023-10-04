import React, { useState } from "react";
import styles from "./Form.module.scss";
import MessageViewer from "../MessageViewer/MessageViewer";
import TextInput from "../TextInput/TextInput.js";

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
        <MessageViewer messages={messages} />
        <TextInput
          currentMessage={currentMessage}
          handleMessageChange={handleMessageChange}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default Form;
