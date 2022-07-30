import React from "react";
import FormInput from "./FormInput";
import "./style.css";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <h1>Sign Up</h1>
        <FormInput />
        <button type="submmit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
