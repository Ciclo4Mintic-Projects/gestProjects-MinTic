import React, { useEffect } from 'react'
import AvancesTable from './AvancesTable'
import ButtonCircle from 'components/ButtonCircle';
import ButtonPurple from 'components/ButtonPurple';
import { NavLink } from 'react-router-dom';
import PrivateComponent from 'components/PrivateComponent'
import PrivateRoute from 'components/PrivateRoute';

const IndexAvances = () => {

  return (
    <PrivateRoute roleList={['LIDER', 'ESTUDIANTE']} stateList={['AUTORIZADO']}>
      <div>
        <div className="  mx-12">
          <h2 className="text-3xl font-poppins text-blackTem text-center">Página de Avances</h2>
          <div className=" flex mt-10 flex-col">
            <NavLink to={"/avances/add"}>
              <PrivateComponent stateList={["AUTORIZADO"]} roleList={["ESTUDIANTE"]}>
                <ButtonPurple>
                  Añadir avance
                </ButtonPurple>
              </PrivateComponent>
            </NavLink>
            <AvancesTable />
          </div>
        </div>
      </div>
    </PrivateRoute>

  )
}

export default IndexAvances
