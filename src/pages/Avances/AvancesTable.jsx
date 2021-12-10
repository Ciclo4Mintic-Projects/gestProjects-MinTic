import React, { useContext, useEffect } from 'react';
import { SupremacyContext } from 'context/supremacyContext';
import ButtonPurple from '../../components/ButtonPurple'
import { NavLink, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client'
import { GET_AVANCES } from 'graphql/avances/queries'
import { ELIMINAR_AVANCE } from 'graphql/avances/mutations';
import { toast } from 'react-toastify';
import PrivateComponent from 'components/PrivateComponent';


const AvancesTable = ({ avancesData }) => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
    setCurrentSection('Avances');
  }, []);

  const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_AVANCES)

  const [eliminarAvance, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(ELIMINAR_AVANCE)

  const navigate = useNavigate();

  useEffect(() => {
    if (mutationData) {
      toast.success('Avance eliminado correctamente')
      window.location.href = "/avances"
    }
  }, [mutationData, navigate]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error al intentar eliminar el avance')
    }
  })



  const eliminarUnAvance = (_id) => {
    console.log("")
    eliminarAvance({
      variables: { _id }
    })
    toast.success('Avance eliminado correctamente');
  }

  if (queryLoading) {
    return <div>cargando...</div>
  }

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
        {queryData && queryData.Avances.map((avance) => {
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
                <PrivateComponent roleList={["ESTUDIANTE"]} stateList={["AUTORIZADO"]}>
                  <ButtonPurple eliminar={eliminarUnAvance} _id={avance._id}>
                    <i className="fas fa-trash" />
                  </ButtonPurple>
                </PrivateComponent>

              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default AvancesTable
