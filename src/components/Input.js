import React from 'react';

export default function Input({value, id, handleChange, type}){
  return (
    <>
      <label htmlFor={id}>Enter your name: </label>
      <input 
        id={id}
        value={value}
        onChange={(e) => handleChange((e) => handleChange(e))}
        type={type}
      />
    </>
  );
}

Input.defaultProps = {
  value: "",
  id: "",
  handleChange: () => {},
  type: "text"
}