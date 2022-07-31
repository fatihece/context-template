import React, { useState } from "react";
import FormInput from "./FormInput";
import "./style.css";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your username",
      label:"Username"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label:"Email"
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Enter your password",
      label:"Password"
    },
    {
      id: 4,
      name: "confirm",
      type: "text",
      placeholder: "Enter your confirm password",
      label:"Confirm Password"
    },
  ];
  const onChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <form>
        <h1>Sign Up</h1>
        {inputs.map((input) => {
          return <FormInput  onChange={onChange}  {...input}/>;
        })}

        <button type="submmit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
