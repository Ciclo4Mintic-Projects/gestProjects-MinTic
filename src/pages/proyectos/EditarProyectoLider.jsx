import React, { useEffect, useContext, useState } from 'react';
import { SupremacyContext } from 'context/supremacyContext';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import { Enum_EstadoInscripcion } from 'utils/enum';
import { EDITAR_PROYECTO } from 'graphql/proyectos/mutations';
import { GET_PROYECTO } from '../../graphql/proyectos/queries';
import { useUser } from 'context/userContext';

const EditarProyectoLider = () => {
  
  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
      setCurrentSection('Proyectos');
  }, []);

  const { userData } = useUser();
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const [objetivos, setObjetivos] = useState([]);
  const [objetivo, setObjetivo] = useState("");
  const [index, setIndex] = useState(0);

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  const [editarProyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_PROYECTO);

  const submitForm = (e) => {
    e.preventDefault();
    delete formData.rol;
    formData.presupuesto = parseFloat(formData.presupuesto)
    editarProyecto({
      variables: { ...formData, objetivosEspecificos: objetivos, _id },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Proyecto modificado correctamente');
      window.location.href = "/proyectos"
    }
  }, [mutationData]);

  useEffect(() => {
    if (queryData && queryData.Proyecto.objetivosEspecificos) {
      setObjetivos(queryData.Proyecto.objetivosEspecificos.slice())
      console.log("objetivos", objetivos)
      document.getElementById('check').click()
    }
  }, [queryData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el proyecto');
    }

    if (queryError) {
      toast.error('Error consultando proyecto');
    }
  }, [mutationError, queryError]);

  if (queryLoading) return <div>Cargando....</div>;

  const handleChange = (evento) => {
    setObjetivo(evento.target.value)
  }

  const handleChangeIndex = (evento) => {
    setIndex(parseInt(evento.target.value))
  }

  const agregarObjetivo = () => {
    objetivos.push(objetivo);
    setObjetivo("")
  }

  const modificarObjetivo = () => {
    objetivos.splice(index - 1, 1, objetivo);
    setObjetivo("")
    setIndex(0)
  }

  const eliminarObjetivo = () => {
    objetivos.splice(index - 1, 1);
    setIndex(0)
  }

  return (
    <div className='flew flex-col items-center justify-center p-10 border border-gray-400 rounded-xl ml-10 mr-10 bg-grayLight'>
      <Link to='/proyectos'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar proyecto</h1>

      <div className='mx-24 font-bold'>
        <span>Objetivos especificos:</span>
        <h3>Texto del objetivo</h3>
        <input type="text" onChange={handleChange} value={objetivo} className='block w-full mb-2' />
        <h3>Número del objetivo</h3>
        <input type="number" onChange={handleChangeIndex} value={index} className='block w-full' />

        <button onClick={agregarObjetivo} className='inline my-2 bg-indigo-700 hover:bg-indigo-500 text-purpleTem10 m-4 p-2 font-bold text-sm rounded-3xl'>agregar objetivo</button>
        <button onClick={modificarObjetivo} className='inline my-2 bg-indigo-700 hover:bg-indigo-500 text-purpleTem10 m-4 p-2 font-bold text-sm rounded-3xl'>modificar objetivo</button>
        <button onClick={eliminarObjetivo} className='inline my-2 bg-indigo-700 hover:bg-indigo-500 text-purpleTem10 m-4 p-2 font-bold text-sm rounded-3xl'>eliminar objetivo</button>
        <span className="block">objetivos especificos agregados:</span>
        <ul className='font-light'>
          {objetivos.map((objetivo, index) => { return <li>{index + 1}. {objetivo}</li> })}
        </ul>
      </div>


      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <Input label='Nombre:' name='nombre' type='text' defaultValue={queryData.Proyecto.nombre} />
        <Input label='Presupuesto:' name='presupuesto' type='number' defaultValue={queryData.Proyecto.presupuesto} />
        <Input label='Objetivo general:' name='objetivoGeneral' type='text' defaultValue={queryData.Proyecto.objetivoGeneral} />
        <input type="checkbox" id='check' hidden/>
        
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
    </div>
  );
};

export default EditarProyectoLider;