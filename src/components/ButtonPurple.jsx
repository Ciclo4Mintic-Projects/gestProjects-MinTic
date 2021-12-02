import React from 'react'

const ButtonPurple = ({ children, eliminar, _id }) => {




  if (eliminar && _id) {
    return (
      <button className=" px-4 h-12 bg-purpleTem text-backgContTem rounded-3xl font-semibold hover:bg-purple-400 " onClick={() => { eliminar(_id) }}>
        {children}
      </button>
    )
  } else {
    return (
      <button className=" px-4 h-12 bg-purpleTem text-backgContTem rounded-3xl font-semibold hover:bg-purple-400 " >
        {children}
      </button>
    )
  }

}

export default ButtonPurple
