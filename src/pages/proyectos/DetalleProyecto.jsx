import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { GET_PROYECTO } from '../../graphql/proyectos/queries';
import { SupremacyContext } from 'context/supremacyContext';

const DetalleProyecto = () => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
      setCurrentSection('Proyectos');
  }, []);

  const { _id } = useParams();
  const [objetivos, setObjetivos] = useState([]);
  const [avances, setAvances] = useState([]);
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
    if (queryData && queryData.Proyecto.avances) {
      setAvances(queryData.Proyecto.avances.slice())
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
        <h2 className='m-4 text-2xl text-gray-800 font-bold text-center'> Datos generales del proyecto </h2>
        
        <h3> Nombre del proyecto: {queryData.Proyecto.nombre}</h3>
        <h3> Presupuesto: {queryData.Proyecto.presupuesto} </h3>
        <h3> Estado del proyecto: {queryData.Proyecto.estado}</h3>
        <h3> Fase del proyecto: {queryData.Proyecto.fase}</h3>
        <br />
        <h2 className='m-4 text-2xl text-gray-800 font-bold text-center'> Objetivos del proyecto </h2>

        <h3> Objetivo General: {queryData.Proyecto.objetivoGeneral} </h3>
        <h3 >Objetivos especificos </h3>
        {!(objetivos.length === 0)  ? (objetivos.map((objetivo)=> {return <li> {objetivo} </li> })):(<div> 
         El proyecto no contiene objetivos especificos </div>)}   
          
        <br />

        <h2 className='m-4 text-2xl text-gray-800 font-bold text-center'> Avances </h2>
        {!(avances.length === 0)  ? (avances.map((avance, index)=> {return <li> Avance {index + 1}:  {avance.descripcion}. Creado por: {avance.creadoPor.nombre} </li> })):(<div> 
         El proyecto no contiene avances </div>)}   
    </div>
  );
};

export default DetalleProyecto;