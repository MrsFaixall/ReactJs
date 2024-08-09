// src/Components/Fragment/FormLogin.js
import React from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form>
      <InputForm 
        label="FullName" 
        name="FullName" 
        type="text" 
        placeholder="Insert Your Name Heree..."
      />
      <InputForm 
        label="Email" 
        name="email" 
        type="email" 
        placeholder="example@gmail.com" 
      />
      <InputForm 
        label="Password" 
        name="password" 
        type="password" 
        placeholder="********" 
      />
      <InputForm 
        label="Confirm Password" 
        name="confirmpassword" 
        type="password" 
        placeholder="********" 
      />
      <Button className="w-full bg-blue-700">Register</Button>
    </form>
  );
};

export default FormRegister;
