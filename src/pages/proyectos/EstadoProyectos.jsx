import React, { useEffect} from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import 'styles/EstadoProyectos.css'
import "styles/_tabla.css"
import { GET_PROYECTOS } from 'graphql/proyectos/queries';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const EstadoProyectos = () => {

  const { data, error, loading } = useQuery(GET_PROYECTOS);

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
      <h2 className='title text-3xl font-poppins text-blackTem'>
        Estado de proyectos
      </h2>
    </div>



    <div className="flex flex-row justify-evenly w-full">

      <div className="w-96 bg-white border border-gray-300 rounded-xl flex m-3 self-start py-2 justify-between">
        <input
          // value={busqueda}
          // onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busqueda"
          className="focus-within:outline-none m-0 w-72 pl-2" />
        <div className="pr-2"><i class="fas fa-search"></i></div>

      </div>
      <Link className='boton-registro bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover py-2 justify-end' to = {"proyecto/add"}>Registrar Proyecto</Link>

    </div>

    <h3 className="title">
      Proyectos registrados
    </h3>
    {loading ? (
      <ReactLoading type='Spokes' color='#4338CA' height={667} width={375} />
    ) : (
      <table className="tabla table-fixed">
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
        {data &&
            data.Proyectos.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.lider.nombre}</td>
                  <td>{u.estado}</td>
                  <td>{u.fechaInicio}</td>
                  <td>{u.fechaFin}</td>
                  <td>{u.presupuesto}</td>
                  <td>{u.objetivoGeneral}</td>
                  <td>{u.fase}</td>
                  <td>
                    <Link to={`/proyectos/editar/${u._id}`}>
                      <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover'>Editar</button>
                    </Link>
                    <Link to={`editar/${u._id}`}>
                      <button className='bg-purpleTem text-purpleTem10 px-2 rounded-xl hover:bg-purpleHover'> Inscribirse </button>
                    </Link>
                  </td>
                </tr>
              );
            })}

        </tbody>
      </table>)}

      </div>
)
}

  



export default EstadoProyectos;
