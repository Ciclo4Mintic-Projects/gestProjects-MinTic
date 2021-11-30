import React, {useState, useEffect} from 'react';
import Logo from 'components/Logo';
import InputAuth from 'components/InputAuth';
import { Link } from 'react-router-dom';
import ButtonAccept from 'components/ButtonAccept';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'context/authContext';


const Login = () => {

    const navigate = useNavigate();

    const {setToken} = useAuth();

    const { form, formData, updateFormData } = useFormData();

    const [login, {data:dataMutation, loading:mutationLoading, error:mutationError}] = 
    useMutation(LOGIN);
    
    const [error, setError] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setError('');
        login({
            variables:formData,
        });
    };

    useEffect(() => {
        if (dataMutation){
            if (dataMutation.login.token) {
                setToken(dataMutation.login.token);
                navigate('/');
            }else{
                setError(dataMutation.login.error)
            }          
        }     

    }, [dataMutation, setToken, navigate]);

    
  return(
    <div className="auth-screen h-screen">
        <div className="auth-container w-auto h-auto">
            <div className="md:p-6 p-4">
                <Logo height={'h-16'} sizeText={'text-xl'}/>
                <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido a la Plataforma <br/> de Gestión de Proyectos</h2>
            </div>
            { error != '' && 
            <div className="p-2 -mt-6">
                <h2 className="text-sm text-center mt-4 text-redTem font-extrabold">{error}</h2>
            </div>
            }
            <form ref={form} onSubmit={submitForm} onChange={updateFormData} className="form-auth px-8 items-center" >
                <InputAuth 
                    name='correo'
                    className='label-auth w-full'
                    label='Correo Electrónico:'
                    type='email'
                    placeholder='Ingrese su Correo'
                    defaultValue=''
                    required
                />
                <InputAuth 
                    name='password'
                    className='label-auth w-full'
                    label='Contraseña:'
                    type='password'
                    placeholder='Ingrese su Contraseña'
                    defaultValue=''
                    required
                />
                <div className="md:p-4 py-2 px-0 mb-4 text-xs md:text-sm flex flex-col justify-between" >
                    <ButtonAccept
                     disabled={Object.keys(formData).length === 0}
                     loading={mutationLoading}
                     text='Ingresar'
                     className='accept-button-auth px-20'
                    />
                    <Link className="link-register" to= '/auth/registro'>
                        Quiero registrarme
                    </Link>
                </div>
            </form>          
        </div>
    </div>
  )
}

export default Login;