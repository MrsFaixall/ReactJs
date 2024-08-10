import React from "react";
import Input from "./Input";
import Label from "./Label";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder} = props;
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-slate-600 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="text-sm border rounded w-full py-2 px-3 text-slate-600"
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
