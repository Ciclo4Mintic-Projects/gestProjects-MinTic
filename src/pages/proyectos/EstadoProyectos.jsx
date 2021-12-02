import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import 'styles/EstadoProyectos.css'
import "styles/_tabla.css"
import { GET_PROYECTOS } from 'graphql/proyectos/queries';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import PrivateComponent from 'components/PrivateComponent';
import PrivateRoute from 'components/PrivateRoute';
import { CREAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import { useUser } from 'context/userContext';

const EstadoProyectos = () => {

  const {userData} = useUser();  
  const { data, error, loading } = useQuery(GET_PROYECTOS);
  const [creaInscripcion, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(CREAR_INSCRIPCION);


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
    <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER', 'ESTUDIANTE']} stateList={['AUTORIZADO']}>
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='title text-3xl font-poppins text-blackTem'>
          Estado de proyectos
        </h2>
      </div>

      <div className="flex justify-start w-full">
        <PrivateComponent roleList={['LIDER']} stateList={['AUTORIZADO']}>
          <Link className='boton-registro bg-purpleTem text-purpleTem10 px-2 rounded-2xl font-bold hover:bg-purpleHover py-2 my-2 justify-end' to={"/proyectos/crear"}>Crear Proyecto</Link>
        </PrivateComponent>
      </div>

      {loading ? (
        <ReactLoading type='Spokes' color='#4338CA' height={667} width={375} />
      ) : (
        <table className="tabla">
          <thead>
            <tr>
              <th> Nombre </th>
              <th> Lider </th>
              <th> Estado </th>
              <th> Fecha inicio </th>
              <th> Fecha fin </th>
              <th>Presupuesto </th>
              <th>Obejtivo General </th>
              <th>Fase </th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.Proyectos.map((u) => {
                return (
                  <tr key={u._id}>
                    <td>{u.nombre}</td>
                    <td>{u.lider.nombre + " " + u.lider.apellido}</td>
                    <td>{u.estado}</td>
                    <td>{u.fechaInicio}</td>
                    <td>{u.fechaFin}</td>
                    <td>{u.presupuesto}</td>
                    <td>{u.objetivoGeneral}</td>
                    <td>{u.fase}</td>
                    <td className="flex flex-col justify-between">
                    <PrivateComponent roleList={['LIDER', 'ADMINISTRADOR']} stateList={['AUTORIZADO']}>
                      <Link to={`/proyectos/editar/${u._id}`}>
                        <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl mb-1 hover:bg-purpleHover'>Editar</button>
                      </Link>
                    </PrivateComponent>
                      <Link to={`editar/${u._id}`}>
                        <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl mb-1 hover:bg-purpleHover'>Detalles</button>
                      </Link>
                      <PrivateComponent roleList={['ESTUDIANTE']} stateList={['AUTORIZADO']}>
                        <button onClick={() => {
                          creaInscripcion({
                            variables: { proyecto: u._id, estudiante: userData._id },
                          });
                          window.location.href = "/inscripcion"
                        }} className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover'> Inscribirse </button>
                      </PrivateComponent>
                    </td>
                  </tr>
                );
              })}

          </tbody>
        </table>)}

    </div>
    </PrivateRoute>
  )
}

export default EstadoProyectos;
