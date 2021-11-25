import React from 'react';

const InputAuth = ({name, className, label, type, placeholder, required }) => {
  return (
    <label htmlFor={name} className={className}>
      <span className="hidden sm:block">
          {label} <br/>
      </span>
      <input
      name = {name} 
      className="input-auth"
      type={type}
      placeholder={placeholder}
      required
      />
    </label>
  );
};

export default InputAuth;