import React, { Fragment } from "react";
import styles from "./MessageViewer.module.scss";

function MessageViewer({ messages }) {
  return (
    <Fragment>
      <div className={styles.viewer}>
        {messages.map((message, index) => (
          <p key={index} className={index === 0 ? styles.highlight : ""}>
            {message}
          </p>
        ))}
      </div>
    </Fragment>
  );
}

export default MessageViewer;
