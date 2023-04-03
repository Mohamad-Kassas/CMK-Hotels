import React, { useState } from "react";
import styles from "../Styles/Filter Box Styles/Cost.module.css";

function CostInput(props) {
  const [text, setText] = useState(props.text);
  const [value, setValue] = useState(0);

  return (
    <div>
      <input
        className={styles.inputBox}
        type="number"
        min="1"
        placeholder={text}
        onChange={(e) => {
          props.handleOnChange(e.target.value);
        }}
      />
    </div>
  );
}

export default CostInput;
