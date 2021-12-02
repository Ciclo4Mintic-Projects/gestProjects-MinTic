import React from 'react';

const Input = ({ label, name, defaultValue, type, required, styles, placeholder }) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3 font-bold w-5/6'>
      <span>{label}</span>
      <input
        required={required}
        type={type}
        name={name}
        className={styles || 'input'}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;