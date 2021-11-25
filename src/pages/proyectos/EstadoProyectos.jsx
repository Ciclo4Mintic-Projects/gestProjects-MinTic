import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import 'styles/EstadoProyectos.css'
import "styles/_tabla.css"

const EstadoProyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading,setLoading] = useState(false);


  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='title text-3xl font-poppins text-blackTem'>
          Estado de proyectos
        </h2>
      </div>
      <TablaProyectos listaProyectos={proyectos} loading={loading}/>
      <ToastContainer position='bottom-center' autoClose={2000} />
    </div>
  );
};

const TablaProyectos = ({ loading, listaProyectos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [proyectosFiltrados, setProyectosFiltrados] = useState(listaProyectos);

  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>

        <div className = "flex flex-row justify-evenly w-full"> 
      
      <div className="w-96 bg-white border border-gray-300 rounded-xl flex m-3 self-start py-2 justify-between">
        <input 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} 
        placeholder="Busqueda" 
        className="focus-within:outline-none m-0 w-72 pl-2"/>
        <div className="pr-2"><i class="fas fa-search"></i></div>
        
      </div>
      <button  className='boton-registro bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover py-2 justify-end'> Registrar Proyecto </button>

      </div>

      <h3 className="title">
          Proyectos registrados
        </h3>
      {loading ? (
          <ReactLoading type='Spokes' color='#4338CA' height={667} width={375} />
        ) : (
      <table className = "tabla table-fixed">
        <thead>
          <tr>
            <th> Nombre </th>
            <th> Lider </th>
            <th> Estado </th>
            <th> Fecha inicio </th>
            <th> Fecha fin </th>
            <th>Presupuesto </th>
            <th> Objetivos </th>
            <th>Fase </th>
            <th>Opciones</th>            
          </tr>
        </thead>
        <tbody>
            <tr>
                <td> Proyecto 1</td>
                <td>Jonas Red </td>
                <td>Activo </td>
                <td>Marzo 25, 2021 </td>
                <td>Marzo 25, 2022</td>
                <td> $590000</td>
                <td>Objetivo 1 </td>
                <td>Terminado</td>
                <td>  <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover p-2'> Inscribirse </button></td>
            </tr>
           
          {/* {proyectosFiltrados.map((proyecto) => {
            return (
              <FilaProyectos
                key={nanoid()}
                proyecto={proyecto}
                setEjecutarConsulta={setEjecutarConsulta}
                />
            );
          })} */}
        </tbody>
      </table>
      )}
    </div>
  );
};

/* const FilaProyectos = ({ proyecto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProyecto, setInfoNuevoProyecto] = useState({
    id: proyecto._id,
    name: proyecto.name,
    email: proyecto.email,
    rol: proyecto.rol,
    state: usuario.state,
  });
  const actualizarUsuario = async () => {
    //enviar la info al backend
    
    await editarUsuario(
      usuario._id,
      {
        id: infoNuevoUsuario._id,
        name: infoNuevoUsuario.name,
        email: infoNuevoUsuario.email,
        rol: infoNuevoUsuario.rol,
        state: infoNuevoUsuario.state,
      },
      (response) => {
        console.log(response.data);
        toast.success('Usuario modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error('Error modificando el usuario');
        console.error(error);
      }
    );
  };
  const deleteUser = async () => {
    await eliminarUsuario(
      usuario._id,
      (response) => {
        console.log(response.data);
        toast.success('Usuario eliminado con éxito');
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error('Error eliminando el usuario');
      }
    );
    setOpenDialog(false);
  };
  return (
    <tr>
      {edit ? (
        <>
          <td>{usuario._id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>
            <select
              className='bg-white border border-gray-600 p-2 rounded-lg m-2 focus-within:outline-none border-none'
              defaultValue={0}
              value={infoNuevoUsuario.rol}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })
              }
            >
              <option disabled value={0}>
                Elija una opción
              </option>
              <option>Inactivo</option>
              <option>Administrador</option>
              <option>Vendedor</option>
            </select>
          </td>
          <td>            
            <select
              className='bg-white border border-gray-600 p-2 rounded-lg m-2 focus-within:outline-none border-none'
              value={infoNuevoUsuario.state}
              defaultValue={0}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, state: e.target.value })}
            >
              <option disabled value={0}>
                Elija una opción
              </option>
              <option>Autorizado</option>
              <option>No autorizado</option>
              <option>Pendiente</option>
            </select>
          </td>        
          
        </>
      ) : (
        <>
          <td>{usuario._id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.state}</td>          
        </>
      )}
      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarUsuario()}
                  className='fas fa-check text-green-700 hover:text-green-500'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title='Editar Vehículo' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
              <Tooltip title='Eliminar usuario' arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash text-red-700 hover:text-red-500'
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el usuario?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => deleteUser()}
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
}; */

export default EstadoProyectos;
