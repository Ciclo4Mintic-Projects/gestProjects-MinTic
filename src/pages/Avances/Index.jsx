import React, { useEffect } from 'react'
import AvancesTable from './AvancesTable'
import ButtonCircle from 'components/ButtonCircle';
import ButtonPurple from 'components/ButtonPurple';
import { NavLink } from 'react-router-dom';

const IndexAvances = () => {

  return (
    <div>
      <div className="  mx-12">
        <h2 className="text-4xl font-bold font-poppins ">Avances</h2>
        <div className=" flex mt-10 flex-col">
          <NavLink to={"/avances/add"}>
            <ButtonPurple>
              Añadir avance
            </ButtonPurple>
          </NavLink>
          <AvancesTable />
        </div>
      </div>

    </div>
  )
}

export default IndexAvances
