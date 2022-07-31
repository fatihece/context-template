import React, { useState } from "react";
import FormInput from "./FormInput";
import "./style.css";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    required: true,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your username",
      label: "Username",
      required: true,
      pattern:"^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]",
      error:"Username should be valid"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      required: true,
      // pattern:"^\S+@\S+\.\S+$"
      error:"Email pattern should be valid"
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Enter your password",
      label: "Password",
      required: true,
      pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
      error:"Password should be valid"

    },
    {
      id: 4,
      name: "confirm",
      type: "text",
      placeholder: "Enter your confirm password",
      label: "Confirm Password",
      required: true,
      pattern:values.password,
      error:"Check your password. It should be same with your password"
    },
  ];
  const onChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]:e.target.value})
  };
  return (
    <div className="form-container">
      <form>
        <h1>Sign Up</h1>
        {inputs.map((input) => {
          return <FormInput onChange={onChange} {...input} />;
        })}

        <button type="submmit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
