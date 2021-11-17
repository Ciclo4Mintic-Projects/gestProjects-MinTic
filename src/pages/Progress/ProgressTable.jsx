import React from 'react'
import { data } from './fakeData'
import ButtonLong from '../../components/ButtonLong'
import { NavLink } from 'react-router-dom';
const ProgressTable = () => {
  const progressData = data;

  return (
    <div className="grid  pt-24">
      <div className="grid grid-cols-5 w-full text-lg font-semibold text-purpleTem  px-20 mb-6 ">
        <p>Creador</p>
        <p>Proyecto</p>
        <p>Avance</p>
        <p>Observaciones</p>
        <p>Detalles</p>
      </div>

      {/* <div className="grid grid-cols-5 w-full">
        <p>{progressData[1].creador}</p>
        <p>Proyecto 003</p>
        <p>Avance#1</p>
        <p>0</p>
        <p>Boton</p>
      </div> */}
      {progressData.map(advance => {
        return (
          <div className="grid grid-cols-5 w-full py-6 border-t-2  px-20 items-center" key={advance.id}>
            <p>{advance.creador}</p>
            <p>{advance.proyecto}</p>
            <p>{advance.avance}</p>
            <p className="justify-self-center">{advance.observaciones.length}</p>
            <NavLink
              to={`edit/${advance.id}`}
            >
              <ButtonLong>Ver más</ButtonLong>
            </NavLink>

          </div>
        )
      })}
    </div>
  )
}

export default ProgressTable
