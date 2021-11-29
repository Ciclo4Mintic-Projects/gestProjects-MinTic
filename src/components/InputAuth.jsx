import React from 'react';

const InputAuth = ({name, className, label, type, placeholder, defaultValue, required }) => {
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
      defaultValue={defaultValue}
      required
      />
    </label>
  );
};

export default InputAuth;