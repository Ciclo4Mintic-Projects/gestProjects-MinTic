import React from 'react'
import ProgressTable from './ProgressTable'
const IndexProgress = () => {
  return (
    <div>
      <div className=" mt-36 mx-12">
        <h2 className="text-4xl font-bold ">Avances</h2>
        <div className=" mt-10 bg-white border-2 rounded-md">
          <ProgressTable />
        </div>
      </div>

    </div>
  )
}

export default IndexProgress
