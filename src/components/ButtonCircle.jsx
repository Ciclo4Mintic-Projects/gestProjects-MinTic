import React from 'react'

const ButtonCircle = ({ children }) => {
  return (
    <button className=" border-2 rounded-full w-14 h-14 ml-3 flex justify-center items-center">
      {children}
    </button>
  )
}

export default ButtonCircle
