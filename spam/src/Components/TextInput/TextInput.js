import React, { Fragment } from "react";
// import styles from "./TextInput.module.scss";

const TextInput = ({
  currentMessage,
  handleMessageChange,
  handleSendMessage,
}) => {
  return (
    <Fragment>
      <input
        type="text"
        value={currentMessage}
        onChange={handleMessageChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </Fragment>
  );
};

export default TextInput;
