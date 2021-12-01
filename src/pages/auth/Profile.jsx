import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SupremacyContext } from 'context/supremacyContext';
import InputAuth from 'components/InputAuth';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_PERFIL} from 'graphql/usuarios/mutations';
import ButtonAccept from 'components/ButtonAccept';
import { useUser } from 'context/userContext';


const EditarPerfil = () => {

    const { userData } = useUser();


    const { setCurrentSection } = useContext(SupremacyContext);

    useEffect(() => {
        setCurrentSection('Editar Perfil');
    }, []);

    const { form, formData, updateFormData } = useFormData(null);
  
    const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_PERFIL);
    

    const submitForm = (e) => {
        e.preventDefault();
        console.log('id',userData._id)
        let _id = userData._id;
        editarUsuario({
        variables: {_id, ...formData },
        });
    };

    useEffect(() => {
        if (mutationData) {
        toast.success('Usuario modificado correctamente');
        }
    }, [mutationData]);


    return (

        <form ref={form} onSubmit={submitForm} onChange= {updateFormData} className="profile-container " >
            <div className="form-profile">    
                <InputAuth 
                    name='nombre'
                    className='label-auth'
                    label='Nombre:'
                    type='text'
                    defaultValue={userData.nombre}
                    required={true}
                />
                <InputAuth 
                    name='apellido'
                    className='label-auth'
                    label='Apellido:'
                    type='text'
                    defaultValue={userData.apellido}
                    required
                />
                <InputAuth 
                    name='identificacion'
                    className='label-auth'
                    label='Identificación:'
                    type='text'
                    defaultValue={userData.identificacion}
                    required
                />
                <InputAuth 
                    name='rol'
                    className='label-auth'
                    label='Rol:'
                    type='text'
                    defaultValue={userData.rol}
                    disabled
                    readOnly
                />
                <InputAuth 
                    name='correo'
                    className='label-auth'
                    label='Correo Electrónico:'
                    type='email'
                    defaultValue={userData.correo}
                    required
                />
            </div>            
            <div className="p-1 mx-auto flex justify-center text-xs md:text-sm" >
                <Link className="" to= '/'>
                    <button  className="cancel-button-auth mr-6 lg:px-8">         
                            Cancelar
                    </button>
                </Link>
                <ButtonAccept
                    disabled={Object.keys(formData).length === 0}
                    loading={false}
                    text='Aceptar'
                    className='accept-button-auth w-2/12'
                />
            </div>
            <Link to= '/perfil/cambiarpassword' className="link-register font-extrabold flex justify-center p-4 text-sm">
                Cambiar Contraseña
            </Link>
        </form>     
    )
}

export default EditarPerfil;