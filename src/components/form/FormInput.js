import React from "react";
import "./style.css";
function FormInput(props) {
  const{id,onChange,label,...inputProps} = props
  return (
    <div className="form-input">
      <label>{label}</label>
      <input  name={props.name} onChange={onChange} type="text" {...inputProps}/>
    </div>
  );
}

export default FormInput;
