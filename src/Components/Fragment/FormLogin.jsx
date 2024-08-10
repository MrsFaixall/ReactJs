// src/Components/Fragment/FormLogin.js
import React, { useEffect } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useRef } from "react";

const FormLogin = () => {
  const handleLogin = (event) =>{
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href="/product";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  },[]);
  return (
    <form onSubmit={handleLogin}>
      <InputForm 
        label="Email" 
        name="email" 
        type="email" 
        placeholder="example@gmail.com" 
        ref={emailRef}
      />
      <InputForm 
        label="Password" 
        name="password" 
        type="password" 
        placeholder="********" 
      />
      <Button className="w-full bg-blue-700" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
