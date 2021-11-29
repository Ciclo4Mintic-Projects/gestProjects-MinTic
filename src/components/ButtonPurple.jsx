import React from 'react'

const ButtonPurple = ({ children }) => {
  return (
    <button className=" px-4 h-12 bg-purpleTem text-backgContTem rounded-3xl font-semibold hover:bg-purple-400 ">
      {children}
    </button>
  )
}

export default ButtonPurple
