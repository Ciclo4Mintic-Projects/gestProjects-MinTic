import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_INSCRIPCION } from 'graphql/inscripcion/queries';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { APROBAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import DropDown from 'components/Dropdown';
import { Enum_EstadoInscripcion } from 'utils/enum';
import { SupremacyContext } from 'context/supremacyContext';

const EditarUsuario = () => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
      setCurrentSection('Inscripciones');
  }, []);

  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_INSCRIPCION, {
    variables: { _id },
  });

  console.log(queryData);

  const [aprobarInscripcion, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(APROBAR_INSCRIPCION);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('fd', formData);
    delete formData.rol;
    aprobarInscripcion({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Inscripcion modificada correctamente');
      window.location.href = "/inscripcion"
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el inscripcion');
    }

    if (queryError) {
      toast.error('Error consultando inscripcion');
    }
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className='flew flex-col h-full items-center justify-center p-10 border border-gray-400 rounded-xl ml-10 mr-10 bg-grayLight'>
      <Link to='/inscripcion'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Aprobar Inscripcion</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <span className='font-bold text-lg'>Id Inscripcion: </span>
        <span className= 'mb-2'>{queryData.Inscripcion._id}</span>
        <span className='font-bold text-lg'>Proyecto: </span>
        <span className= 'mb-2'>{queryData.Inscripcion.proyecto.nombre}</span>
        <span className='font-bold text-lg'>Estudiante:</span>
        <span className= 'mb-2'>{queryData.Inscripcion.estudiante.nombre +" "+ queryData.Inscripcion.estudiante.apellido}</span>
        <DropDown
          label='Estado de la inscripción:'
          name='estado'
          defaultValue={queryData.Inscripcion.estado}
          required={true}
          options={Enum_EstadoInscripcion}
        />
        <span className='font-bold text-lg'>Fecha de ingreso:</span>
        <span className= 'mb-2'>{queryData.Inscripcion.fechaIngreso}</span>
        <span className='font-bold text-lg'>Fecha de egreso:</span>
        <span className= 'mb-2'>{queryData.Inscripcion.fechaEgreso}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
    </div>
  );
};

export default EditarUsuario;
