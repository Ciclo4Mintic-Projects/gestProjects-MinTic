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
        setCurrentSection('Cambiar Contraseña');
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

        <form ref={form} onSubmit={submitForm} onChange= {updateFormData} className="profile-container mt-14 " >
            <div className="form-profile">                 
                <InputAuth 
                    name='password'
                    className='label-auth'
                    label='Contraseña Actual:'
                    type='password'
                    placeholder="Contraseña Actual"
                    required
                />            
                <InputAuth 
                    name='password'
                    className='label-auth'
                    label='Nueva Contraseña:'
                    type='password'
                    placeholder="Nueva Contraseña"
                    required
                />            
                <InputAuth 
                    name='verifyPassword'
                    className='label-auth'
                    label='Verificar Contraseña:'
                    type='password'
                    placeholder="Verificar Contraseña"
                    required
                />     
            </div>            
            <div className="p-1 mx-auto flex justify-center text-xs md:text-sm" >
                <Link className="" to= '/perfil'>
                    <button  className="cancel-button-auth mr-6 lg:px-8">         
                            Cancelar
                    </button>
                </Link>
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