import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome, please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "Login" ? "Don't have an account? " : "Already have an account? "}
          {type === "Login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "Register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
