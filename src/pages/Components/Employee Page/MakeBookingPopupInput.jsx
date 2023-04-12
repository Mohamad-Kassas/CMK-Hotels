import React, { useState } from "react"
import styles from "../Styles/Popup/PopupInput.module.css"

function PopupInput(props) {
  const [inputType, setInputType] = useState(props.inputType)

  return (
    <div className={styles.containerDiv}>
      <input
        className={styles.inputBox}
        id={inputType + "InputBooking"}
        type={inputType}
        name={inputType}
        placeholder={inputType.charAt(0).toUpperCase() + inputType.slice(1)}
        onChange={(e) => {
          props.onChangeFunction(e.target.value)
        }}
      />
      <label className={styles.label} htmlFor={inputType}>
        {inputType.charAt(0).toUpperCase() + inputType.slice(1)}
      </label>
    </div>
  )
}

export default PopupInput
