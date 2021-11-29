import React from 'react'
import ButtonPurple from '../../components/ButtonPurple'
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { GET_AVANCES } from 'graphql/avances/queries'


const AvancesTable = ({ avancesData }) => {
  const { data, error, loading } = useQuery(GET_AVANCES)


  return (
    <table className="tabla">
      <thead >
        <tr>
          <th>Creador</th>
          <th>Proyecto</th>
          <th>Avance</th>
          <th>Observaciones</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data && data.Avances.map((avance) => {
          return (
            <tr key={avance._id}>
              <td>{avance.creadoPor.nombre + " " + avance.creadoPor.apellido}</td>
              <td>{avance.proyecto.nombre}</td>
              <td>{avance.titulo}</td>
              <td className="justify-self-center">{avance.observaciones.length}</td>
              <td>
                <NavLink
                  to={`edit/${avance._id}`}
                >
                  <ButtonPurple>
                    <i className="fas fa-edit" />
                  </ButtonPurple>
                </NavLink>
                <ButtonPurple>
                  <i className="fas fa-trash" />
                </ButtonPurple>

              </td>



            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default AvancesTable
