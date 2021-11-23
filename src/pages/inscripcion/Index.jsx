import { toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import ReactLoading from 'react-loading';
import { SupremacyContext } from 'context/supremacyContext';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_INSCRIPCIONES } from 'graphql/inscripcion/queries';
import { Link } from 'react-router-dom';
import { Enum_EstadoInscripcion } from 'utils/enum';

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
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-poppins text-blackTem text-center'>
          Página de Inscripciones
        </h2>

      <div className="w-96 bg-white border border-gray-300 rounded-xl flex m-3 self-start py-2 justify-between">
        <input 
        //value={busqueda} 
        //onChange={(e) => setBusqueda(e.target.value)} 
        placeholder="Busqueda" 
        className="focus-within:outline-none m-0 w-72 pl-2"/>
        <div className="pr-2"><i class="fas fa-search"></i></div>
        </div>
        <div>
      <table className = 'tabla'>
        <thead>
          <tr>
            <th>Id inscripcion</th>
            <th>Proyecto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Fecha ingreso</th>
            <th>Fecha egreso</th>
            <th>Acciones</th>            
          </tr>
        </thead>
        <tbody>
        {data &&
            data.Inscripciones.map((i) => {
              return (
                <tr key={i._id}>
                  <td>{i._id}</td>
                  <td>{i.proyecto.nombre}</td>
                  <td>{i.estudiante.nombre}</td>
                  <td>{i.estudiante.apellido}</td>
                  <td>{Enum_EstadoInscripcion[i.estado]}</td>
                  <td>{i.fechaIngreso}</td>
                  <td>{i.fechaEgreso}</td>
                  <td>
                    <Link to={`/inscripcion/editar/${i._id}`}>
                      <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover my-2'>Editar</button>
                    </Link>
                    <Link to='/avance'>
                      <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover'>Avance</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
      </div>
      
    </div>
  );
};

export default Inscripcion;