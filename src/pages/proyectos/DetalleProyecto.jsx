import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { GET_PROYECTO } from '../../graphql/proyectos/queries';


const DetalleProyecto = () => {
  const { _id } = useParams();
  const [objetivos, setObjetivos] = useState([]);
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  
  useEffect(() => {
    if (queryData && queryData.Proyecto.objetivosEspecificos) {
      setObjetivos(queryData.Proyecto.objetivosEspecificos.slice())
    }
  }, [queryData]);

  useEffect(() => {
    if (queryError) {
      toast.error('Error consultando proyecto');
    }
  }, [queryError]);

  if (queryLoading) return <div>Cargando....</div>;

  

  return (
    <div className='flew flex-col items-center justify-center p-10 border border-gray-400 rounded-xl ml-10 mr-10 bg-grayLight'>
      <Link to='/proyectos'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'> Detalle del proyecto </h1>
        <h3> Nombre del proyecto: {queryData.Proyecto.nombre}</h3>
      
        <h3> Presupuesto: {queryData.Proyecto.presupuesto} </h3>
        

      <h3> Objetivo General: {queryData.Proyecto.objetivoGeneral} </h3>
        <h3 >Objetivos especificos </h3>
        <ul className='font-light'>
          {objetivos.map((objetivo, index) => { return <li>{index + 1}. {objetivo}</li> })}
        </ul>
        
        
      
    </div>
  );
};

export default DetalleProyecto;