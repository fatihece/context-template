import React from "react";
import FormInput from "./FormInput";
import "./style.css";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <FormInput />
        <button type="submmit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
