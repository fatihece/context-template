import React from "react";
import "./style.css";
function FormInput(props) {
  const{id,onChange,label,error,...inputProps} = props
  return (
    <div className="form-input">
      <label>{label}</label>
      <input  name={props.name} onChange={onChange} type="text" pattern="" {...inputProps}/>
      <span>{error}</span>
    </div>
  );
}

export default FormInput;
