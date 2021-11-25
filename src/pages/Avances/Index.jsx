import React from 'react'
import AvancesTable from './AvancesTable'
const IndexAvances = () => {
  return (
    <div className=" bg-backgContTem">
      <div className=" mt-36 mx-12">
        <h2 className="text-4xl font-bold font-poppins ">Avances</h2>
        <div className="bg-white rounded-3xl mt-10">
          <AvancesTable />
        </div>
      </div>

    </div>
  )
}

export default IndexAvances
