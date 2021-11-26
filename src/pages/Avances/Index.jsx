import React, { useEffect } from 'react'
import AvancesTable from './AvancesTable'
// import { useQuery } from '@apollo/client'
// import { GET_AVANCES } from 'graphql/avances/queries'

const IndexAvances = () => {

  //const { data, error, loading } = useQuery(GET_AVANCES)

  // useEffect(() => {
  //   console.log("data servidor", data);
  // }, [data])

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
