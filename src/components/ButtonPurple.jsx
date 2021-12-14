import React from 'react'

const ButtonPurple = ({ children, eliminar, _id, update }) => {




  if (eliminar && _id) {
    return (
      <button data-testid='button-purple' className=" px-4 h-12 bg-purpleTem text-backgContTem rounded-3xl font-semibold hover:bg-purple-400 " onClick={() => { eliminar(_id) }}>
        {children}
      </button>
    )
  } else if (update) {
    return (
      <button data-testid='button-purple' className=" px-4 h-12 bg-purpleTem text-backgContTem rounded-3xl font-semibold hover:bg-purple-400 " onClick={update}>
        {children}
      </button>
    )
  } else {
    return (
      <button data-testid='button-purple' className=" px-4 h-12 bg-purpleTem text-backgContTem rounded-3xl font-semibold hover:bg-purple-400 " >
        {children}
      </button>
    )
  }

}

export default ButtonPurple
