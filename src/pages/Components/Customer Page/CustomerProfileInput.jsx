import React, { useState } from "react";
import styles from "../Styles/Popup/PopupInput.module.css";

function PopupInput(props) {
  const [inputType, setInputType] = useState(props.inputType);
  const [value, setValue] = useState(props.value);

  return (
    <div className={styles.containerDiv}>
      <input
        className={styles.inputBox}
        id={inputType + "Input"}
        type={inputType}
        name={inputType}
        defaultValue={value}
        placeholder={inputType.charAt(0).toUpperCase() + inputType.slice(1)}
        onChange={(e) => {
          props.onChangeFunction(e);
        }}
      />
      <label className={styles.label} htmlFor={inputType}>
        {inputType.charAt(0).toUpperCase() + inputType.slice(1)}
      </label>
    </div>
  );
}

export default PopupInput;
