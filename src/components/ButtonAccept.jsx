import React from 'react';
import ReactLoading from 'react-loading';

const ButtonAccept = ({ disabled, loading, text, className }) => {
  return (
    <button
      data-testid='button-accept'
      disabled={disabled}
      type='submit'
      className={className}
    >
      {loading ? <ReactLoading data-testid='accept-loading' type='spin' height={30} width={30} /> : text}
    </button>
  );
};

export default ButtonAccept;