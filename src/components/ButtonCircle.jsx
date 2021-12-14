import React from 'react'

const ButtonCircle = ({ children, update }) => {
  return (
    <button 
      data-testid='button-circle'
      className=" border-2 rounded-full w-14 h-14 ml-3 flex justify-center items-center hover:bg-purpleTem10" 
      onClick={update}
    >
      {children}
    </button>
  )
}

export default ButtonCircle
