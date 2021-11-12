import React from 'react'
import ProgressTable from './ProgressTable'
const IndexProgress = () => {
  return (
    <div className=" bg-backgContTem">
      <div className=" mt-36 mx-12">
        <h2 className="text-4xl font-bold  ">Avances</h2>
        <div className="bg-white rounded-3xl mt-10">
          <ProgressTable />
        </div>
      </div>

    </div>
  )
}

export default IndexProgress
