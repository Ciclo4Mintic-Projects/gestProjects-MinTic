import React from "react";


const Logo = (props) => {
    return (
      <div className='w-full flex items-center justify-center'>
        <img src='/images/logo.png' alt='Logo' className= {props.height} />
        <span className= {`my-2 ${props.sizeText} font-poppins font-bold text-center ml-1`}>Supremacy</span>
      </div>
    );
  };

  export default Logo;