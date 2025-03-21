import { useState } from "react";
import "./FormInput.css"

const FormInput = (props) => {

  const [focused, setFocused] = useState(false)
  const {label, errorMessage, onChange, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  }
  return (
    <div className="formInput">
      <label >{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className="input-field"
      />
      <span className="error-text">{errorMessage}</span>
    </div>
  );
};

export default FormInput;