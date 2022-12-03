import React from "react";
import { useForm } from "./useForm";

export function Form() {
  const { input, password, handleInputs } = useForm();
  
  return (
    <div>
      <h1>Custom hooks form</h1>
      <input name="username" value={input} onChange={handleInputs} />
      <input name="password" type="password" value={password} onChange={handleInputs}/>
    </div>
  );
}
