import React, {useRef, useEffect, useState} from 'react';
import Logo from 'components/Logo';
import InputAuth from 'components/InputAuth';
import ButtonAccept from 'components/ButtonAccept';
import useFormData from 'hooks/useFormData';
import DropdownAuth from 'components/DropdownAuth';
import { Enum_Rol } from 'utils/enum';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { REGISTRO } from 'graphql/auth/mutations';
import { useMutation } from '@apollo/client';
import { useAuth } from 'context/authContext';

const SignUp = () => {

    const {setToken} = useAuth();

    const navigate = useNavigate();

    const { form, formData, updateFormData } = useFormData();

    const [registro, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(REGISTRO);

    const [error, setError] = useState('');

    const submitFormSignUp = (e) => {
        e.preventDefault();
        setError('');
        registro({variables: formData });
    };

    useEffect(() => {
        if(dataMutation) {
            if(dataMutation.registro.token) {
                setToken(dataMutation.registro.token);
                navigate('/');
            } else {
                setError(dataMutation.registro.error)
            }
        }
 
    }, [dataMutation, setToken, navigate]);


   
    return (
        <div className="auth-screen">
            <div className="auth-container">
                <div className="md:p-10 p-4">
                    <Logo height={'h-16'} sizeText={'text-xl'}/>
                    <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido al Resgistro <br/> Plataforma de Gestión de Proyectos</h2>
                </div>
                <form ref={form} onSubmit={submitFormSignUp} onChange={updateFormData} className="form-auth" >
                    <InputAuth 
                        name='nombre'
                        className='label-auth'
                        label='Nombre:'
                        type='text'
                        placeholder='Ingrese su Nombre'
                        defaultValue=''
                        required
                    />
                    <InputAuth 
                        name='apellido'
                        className='label-auth'
                        label='Apellido:'
                        type='text'
                        placeholder='Ingrese su Apellido'
                        defaultValue=''
                        required
                    />
                    <InputAuth 
                        name='identificacion'
                        className='label-auth'
                        label='Identificación:'
                        type='text'
                        placeholder='Ingrese su identificación'
                        defaultValue=''                    
                        required
                    />    
                     <DropdownAuth
                        label='Rol deseado:'
                        name='rol'                    
                        required={true}
                        options={Enum_Rol}
                    />              
                    <InputAuth 
                        name='correo'
                        className='label-auth'
                        label='Correo Electrónico:'
                        type='email'
                        placeholder='Ingrese su correo electrónico'
                        defaultValue=''
                        required
                    />   
                    <InputAuth 
                        name='password'
                        className='label-auth'
                        label='Contraseña:'
                        type='password'
                        placeholder='Ingrese su contraseña'
                        defaultValue=''
                        required
                    />                     
                    <InputAuth 
                        name='verifypassword'
                        className='label-auth'
                        label='Verificar Contraseña:'
                        type='password'
                        placeholder='Ingrese nuevamente su contraseña'
                        defaultValue=''
                        // required
                    />                     
                    <div className="p-2 flex mx-auto">
                        <h2 className="text-sm text-center mt-4 text-redTem font-extrabold">{error}</h2>
                    </div>
                    <div className="p-6 mx-auto flex justify-center text-xs md:text-sm" >
                        <button  className="cancel-button-auth w-3/12 mx-auto lg:mx-6">         
                            <Link to= '/auth/login'>
                                Cancelar
                            </Link>
                        </button>
                        <ButtonAccept
                        disabled={Object.keys(formData).length === 0}
                        loading={false}
                        text='Registrarme'
                        className='accept-button-auth w-3/12 mx-auto lg:mx-6'
                        />
                    </div>
                </form>      
            </div>            
        </div>
    )
};

export default SignUp;