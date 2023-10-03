import React, { Fragment } from "react";
// import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  const [text, setText] = React.useState(props.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Было введено имя: ${text}`);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Fragment>
      <p>Введите сообщение: </p>
      <textarea onChange={handleChange} value={text}></textarea>
      <button onClick={handleSubmit}>Отправить</button>
    </Fragment>
  );
};

export default TextInput;
