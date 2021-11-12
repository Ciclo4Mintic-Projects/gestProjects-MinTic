import React from 'react'
import { data } from './fakeData'
import ButtonLong from '../../components/ButtonLong'
const ProgressTable = () => {
  const progressData = data;

  return (
    <div className="grid justify-items-center pt-24">
      <div className="grid grid-cols-5 w-full text-lg font-semibold text-purpleTem  pl-20 mb-6 ">
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
          <div className="grid grid-cols-5 w-full py-6 border-t-2  px-20 items-center">
            <p>{advance.creador}</p>
            <p>{advance.proyecto}</p>
            <p>{advance.avance}</p>
            <p className="justify-self-center">{advance.observaciones}</p>
            <ButtonLong>Ver más</ButtonLong>
          </div>
        )
      })}
    </div>
  )
}

export default ProgressTable
