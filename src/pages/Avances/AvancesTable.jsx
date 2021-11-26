import React from 'react'
import ButtonLong from '../../components/ButtonLong'
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { GET_AVANCES } from 'graphql/avances/queries'
const AvancesTable = ({ avancesData }) => {
  const { data, error, loading } = useQuery(GET_AVANCES)


  return (
    <div className="grid  pt-24">
      <div className="grid grid-cols-5 w-full text-lg font-semibold text-purpleTem  px-20 mb-6 ">
        <p>Creador</p>
        <p>Proyecto</p>
        <p>Avance</p>
        <p>Observaciones</p>
        <p>Detalles</p>
      </div>

      {data && data.Avances.map((avance) => {
        return (
          <div className="grid grid-cols-5 w-full py-6 border-t-2  px-20 items-center" key={avance._id}>
            <p>{avance.creadoPor.nombre}</p>
            <p>{avance.proyecto.nombre}</p>
            <p>nombre avance</p>
            <p className="justify-self-center">{avance.observaciones.length}</p>
            <NavLink
              to={`edit/${avance._id}`}
            >
              <ButtonLong>Ver más</ButtonLong>
            </NavLink>

          </div>
        )
      })}
    </div>
  )
}

export default AvancesTable
