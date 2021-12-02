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
import { useAuth } from 'context/authContext';
import jwt_decode from 'jwt-decode';


const EditarPerfil = (props) => {

    const { userData, setUserData } = useUser();

    const {setToken} = useAuth();
    
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);


    const { setCurrentSection } = useContext(SupremacyContext);

    useEffect(() => {
        setCurrentSection('Editar Perfil');
    }, []);

    const { form, formData, updateFormData } = useFormData(null);
  
    const [editarPerfil, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_PERFIL);
    

    const submitForm = (e) => {
        e.preventDefault();
        setError('');
        if(equals()){
            toast.error('No se ha modificado ningún campo')
            return false;
        }
        let _id = userData._id;
        editarPerfil({
        variables: {_id, ...formData },
        });
    };
    
    useEffect(() => {
        if (mutationData) {                       
            if (mutationData.editarPerfil.token) {
                setToken(mutationData.editarPerfil.token)
                const decodedProfile = jwt_decode(mutationData.editarPerfil.token);
                setUserData({
                    _id: decodedProfile._id,
                    nombre: decodedProfile.nombre,
                    apellido: decodedProfile.apellido,
                    identificacion: decodedProfile.identificacion,
                    correo: decodedProfile.correo,
                    rol: decodedProfile.rol,
                    estado: decodedProfile.estado,
                });
                toast.success('Perfil editado correctamente');
            } else {
                toast.error('No se pudo editar el Perfil');
            }
        }

      }, [mutationData]);

      const equals = () =>{
        
        for(var i in formData){
            for(var j in userData){
                //si los name de los campos son iguales
                if(i === j){
                    //si los valores son diferentes
                    if(formData[i] !== userData[j]){
                        return false
                    }
                }
            }
        }
         return true;
      }

   

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