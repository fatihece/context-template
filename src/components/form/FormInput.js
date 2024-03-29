import React,{useState} from "react";
import "./style.css";
function FormInput(props) {
  const[focused,setFocused]=useState(false)
  const{id,onChange,label,error,...inputProps} = props

  return (
    <div className="form-input">
      <label>{label}</label>
      <input  
      name={props.name} 
      onChange={onChange} 
      type="text" 
      focused={focused.toString()}
      onBlur={()=>setFocused(true)}
      {...inputProps}/>
      <span>{error}</span>
    </div>
  );
}

export default FormInput;
