import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOS } from 'graphql/proyectos/queries';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { APROBAR_INSCRIPCION } from 'graphql/inscripcion/mutations';
import DropDown from 'components/Dropdown';
import { Enum_EstadoInscripcion } from 'utils/enum';
import { Enum_EstadoProyecto } from 'utils/enum';
import { Enum_FaseProyecto } from 'utils/enum';

const EditarProyectoLider = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROYECTOS, {
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
      toast.success('Proyecto modificado correctamente');
      window.location.href = "/inscripcion"
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el proyecto');
    }

    if (queryError) {
      toast.error('Error consultando proyecto');
    }
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className='flew flex-col h-full items-center justify-center p-10 border border-gray-400 rounded-xl ml-10 mr-10 bg-grayLight'>
      <Link to='/inscripcion'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar proyecto</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <span className='font-bold text-lg'>Id proyecto: </span>
        <span className= 'mb-2'>{queryData.Proyecto._id}</span>
        <span className='font-bold text-lg'>Nombre: </span>
        <span className= 'mb-2'>{queryData.Proyecto.nombre}</span>
        <span className='font-bold text-lg'>Presupuesto:</span>
        <span className= 'mb-2'>{queryData.Proyecto.presupuesto}</span>
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
        <span className='font-bold text-lg'>Fecha inicio:</span>
        <span className= 'mb-2'>{queryData.Proyecto.fechaInicio}</span>
        <span className='font-bold text-lg'>Fecha fin:</span>
        <span className= 'mb-2'>{queryData.Proyecto.fechaFin}</span>
        <span className='font-bold text-lg'>Líder:</span>
        <span className= 'mb-2'>{queryData.Proyecto.lider}</span>
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