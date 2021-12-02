import { toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import ReactLoading from 'react-loading';
import { SupremacyContext } from 'context/supremacyContext';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_INSCRIPCIONES } from 'graphql/inscripcion/queries';
import { Link } from 'react-router-dom';
import { Enum_EstadoInscripcion } from 'utils/enum';
import PrivateComponent from 'components/PrivateComponent';
import PrivateRoute from 'components/PrivateRoute';

const Inscripcion = () => {

  const { data, error, loading } = useQuery(GET_INSCRIPCIONES);

  useEffect(() => {
    console.log('data servidor', data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);

  if (loading) return <div>Cargando....</div>;

  return (
    <PrivateRoute roleList={['LIDER', 'ESTUDIANTE']} stateList={['AUTORIZADO']}>
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-poppins text-blackTem text-center'>
          Página de Inscripciones
        </h2>

        <div>
      <table className = 'tabla'>
        <thead>
          <tr>
            <th>Id inscripcion</th>
            <th>Proyecto</th>
            <th>Lider Proyecto</th>
            <th>Nombre Estudiante</th>
            <th>Estado</th>
            <th>Fecha ingreso</th>
            <th>Fecha egreso</th>
            <PrivateComponent roleList={['LIDER']} stateList={['AUTORIZADO']}>
            <th>Acciones</th>
            </PrivateComponent>            
          </tr>
        </thead>
        <tbody>
        {data &&
            data.Inscripciones.map((i) => {
              return (
                <tr key={i._id}>
                  <td>{i._id}</td>
                  <td>{i.proyecto.nombre}</td>
                  <td>{i.proyecto.lider.nombre +" "+ i.proyecto.lider.apellido}</td>
                  <td>{i.estudiante.nombre +" "+ i.estudiante.apellido}</td>
                  <td>{Enum_EstadoInscripcion[i.estado]}</td>
                  <td>{i.fechaIngreso}</td>
                  <td>{i.fechaEgreso}</td>
                  <PrivateComponent roleList={['LIDER']} stateList={['AUTORIZADO']}>
                  <td>
                    <Link to={`/inscripcion/editar/${i._id}`}>
                      <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover my-2'>Editar</button>
                    </Link>                 
                  </td>
                  </PrivateComponent>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
      </div>
      
    </div>
    </PrivateRoute>
  );
};

export default Inscripcion;