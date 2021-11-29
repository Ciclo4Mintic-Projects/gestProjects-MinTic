
import { toast } from 'react-toastify';
import { Dialog, Tooltip } from '@material-ui/core';
import ReactLoading from 'react-loading';
import { SupremacyContext } from 'context/supremacyContext';
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enum';
import PrivateRoute from 'components/PrivateRoute';

const EstadoUsuarios = () => {

  const { data, error, loading } = useQuery(GET_USUARIOS);

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
    <PrivateRoute roleList={['ADMINISTRADOR']}>
      <div className='flex h-full w-full flex-col items-center justify-start p-8'>
        <div className='flex flex-col'>
          <h2 className='text-3xl font-poppins text-blackTem text-center'>
            Página de administración de Usuarios
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
              <th>Id del Usuario</th>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>            
            </tr>
          </thead>
          <tbody>
          {data && data.Usuarios ? (
                <>
              {data.Usuarios.map((u) => {
                return (
                  <tr key={u._id}>
                    <td>{u._id}</td>
                    <td>{u.identificacion}</td>
                    <td>{u.nombre}</td>
                    <td>{u.apellido}</td>
                    <td>{u.correo}</td>
                    <td>{Enum_Rol[u.rol]}</td>
                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                    <td>
                      <Link to={`/usuarios/editar/${u._id}`}>
                        <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover'>Editar</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
              </>
              ) : (
                <div>No autorizado</div>
              )}
          </tbody>
        </table>
        </div>
        </div>      
      </div>
    </PrivateRoute>
  );
};

export default EstadoUsuarios;

