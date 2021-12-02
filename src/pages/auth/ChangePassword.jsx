import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SupremacyContext } from 'context/supremacyContext';
import InputAuth from 'components/InputAuth';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import ButtonAccept from 'components/ButtonAccept';
import { useUser } from 'context/userContext';
import { CAMBIAR_PASSWORD } from 'graphql/auth/mutations';


const EditarPerfil = () => {

    const { userData } = useUser();

    
    const { setCurrentSection } = useContext(SupremacyContext);
    
    useEffect(() => {
        setCurrentSection('Cambiar Contraseña');
    }, []);
    
    const { form, formData, updateFormData } = useFormData(null);

    const [cambiarPassword, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(CAMBIAR_PASSWORD);

    const submitForm = (e) => {
        e.preventDefault();
        let _id = userData._id;
        cambiarPassword({
            variables: {_id, ...formData },
        });
    };
    
   
    useEffect(() => {
        if (dataMutation) {
            if(dataMutation.cambiarPassword.type == "error"){
                toast.error(dataMutation.cambiarPassword.message)
            }else{
                toast.success(dataMutation.cambiarPassword.message);        
            }        
        }
    }, [dataMutation]);


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
                    name='newpassword'
                    className='label-auth'
                    label='Nueva Contraseña:'
                    type='password'
                    placeholder="Nueva Contraseña"
                    required
                />            
                <InputAuth 
                    name='verifypassword'
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