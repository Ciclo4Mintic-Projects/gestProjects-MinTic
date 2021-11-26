import React, {useContext, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from 'graphql/usuarios/queries';
import { SupremacyContext } from 'context/supremacyContext';
import InputAuth from 'components/InputAuth';
import DropdownAuth from 'components/DropdownAuth';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from 'graphql/usuarios/mutations';
import { Enum_Rol } from 'utils/enum';
import ButtonAccept from 'components/ButtonAccept';

const EditarPerfil = () => {

    const { setCurrentSection } = useContext(SupremacyContext);

    useEffect(() => {
        setCurrentSection('Editar Perfil');
    }, []);

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, {
        variables: { _id },
    });

    console.log(queryData);

    const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDITAR_USUARIO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('fd', formData);
        delete formData.rol;
        editarUsuario({
        variables: { _id, ...formData },
        });
    };

    useEffect(() => {
        if (mutationData) {
        toast.success('Usuario modificado correctamente');
        }
    }, [mutationData]);

    useEffect(() => {
        if (mutationError) {
        toast.error('Error modificando el usuario');
        }

        if (queryError) {
        toast.error('Error consultando el usuario');
        }
    }, [queryError, mutationError]);

    if (queryLoading) return <div>Cargando....</div>; 


    return (

        <form ref={form} onSubmit={submitForm} onChange= {updateFormData} className="profile-container " >
            <div className="form-profile">    
                <InputAuth 
                    name='nombre'
                    className='label-auth'
                    label='Nombre:'
                    type='text'
                    // defaultValue={queryData.Usuario.nombre}
                    required={true}
                />
                <InputAuth 
                    name='apellido'
                    className='label-auth'
                    label='Apellido:'
                    type='text'
                    defaultValue=''
                    required
                />
                <InputAuth 
                    name='identificacion'
                    className='label-auth'
                    label='Identificación:'
                    type='text'
                    // defaultValue={queryData.Usuario.identificacion}
                    required
                />
                <DropdownAuth
                    label='Rol:'
                    name='rol'                    
                    required={true}
                    options={Enum_Rol}
                /> 
                <InputAuth 
                    name='correo'
                    className='label-auth'
                    label='Correo Electrónico:'
                    type='email'
                    // defaultValue={queryData.Usuario.correo}
                    required
                />
                <InputAuth 
                    name='password'
                    className='label-auth'
                    label='Contraseña:'
                    type='password'
                    defaultValue=''
                    required
                />            
                <InputAuth 
                    name='verifyPassword'
                    className='label-auth'
                    label='Verificar Contraseña:'
                    type='password'
                    defaultValue=''
                    required
                />     
            </div>            
            <div className="p-1 mx-auto flex justify-around text-xs md:text-sm" >
                <button  className="cancel-button-auth w-3/12">         
                    <Link to= '/'>
                        Cancelar
                    </Link>
                </button>
                <ButtonAccept
                    disabled={Object.keys(formData).length === 0}
                    loading={false}
                    text='Aceptar'
                    className='accept-button-auth w-3/12'
                />
            </div>
        </form>     
    )
}

export default EditarPerfil;