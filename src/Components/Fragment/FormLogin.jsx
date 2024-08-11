import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product";
      } else {
        setLoginFailed(res.response ? res.response.data : "Login failed");
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Jhon Do"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <Button className="w-full bg-blue-700" type="submit">Login</Button>
      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
