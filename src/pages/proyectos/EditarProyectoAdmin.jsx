import React, { useEffect, useContext, useState } from 'react';
import { SupremacyContext } from 'context/supremacyContext';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import { Enum_EstadoProyecto, Enum_FaseProyecto } from 'utils/enum';
import { EDITAR_PROYECTO } from 'graphql/proyectos/mutations';
import { GET_PROYECTO } from '../../graphql/proyectos/queries';
import { TERMINAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import { useUser } from 'context/userContext';

const EditarProyectoLider = () => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
      setCurrentSection('Proyectos');
  }, []);


  const { userData } = useUser();
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROYECTO, {
    variables: { _id },
  });

  const [editarProyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_PROYECTO);

  const [terminarInscripcion, { data: mutationData2, loading: mutationLoading2, error: mutationError2 }] =
    useMutation(TERMINAR_INSCRIPCION);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData)
    delete formData.rol;
    editarProyecto({
      variables: { _id, ...formData },
    });
    if (formData.estado === 'INACTIVO') {
      terminarInscripcion( {variables: {proyecto: _id}})
    }
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Proyecto modificado correctamente');
      window.location.href = "/proyectos"
    }
    if (mutationData2) {
      toast.success('Proyecto modificado correctamente');
      window.location.href = "/proyectos"
    }
    console.log(mutationData)
  }, [mutationData, mutationData2]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el proyecto');
    }

    if (queryError) {
      toast.error('Error consultando proyecto');
    }
  }, [mutationError, queryError, mutationError2]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className='flew flex-col items-center justify-center p-10 border border-gray-400 rounded-xl ml-10 mr-10 bg-grayLight'>
      <Link to='/proyectos'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar proyecto</h1>

      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <span className='font-bold text-lg'>Nombre:</span>
        <span className='mb-2'>{queryData.Proyecto.nombre}</span>
        <span className='font-bold text-lg'>Presupuesto:</span>
        <span className='mb-2'>{queryData.Proyecto.presupuesto}</span>
        <span className='font-bold text-lg'>Objetivo general:</span>
        <span className='mb-2'>{queryData.Proyecto.objetivoGeneral}</span>
        <DropDown
          label='Estado del proyecto:'
          name='estado'
          defaultValue={queryData.Proyecto.estado}
          required={true}
          options={Enum_EstadoProyecto}
        />
        <DropDown
          label='Fase del proyecto:'
          name='fase'
          defaultValue={queryData.Proyecto.fase}
          required={true}
          options={Enum_FaseProyecto}
        />
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