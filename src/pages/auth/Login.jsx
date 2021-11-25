import React, {useState} from 'react';
import Logo from 'components/Logo';
import InputAuth from 'components/InputAuth';
import { Link } from 'react-router-dom';
import ButtonAccept from 'components/ButtonAccept';

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    
    
  return(
    <div className="auth-screen h-screen">
        <div className="auth-container w-auto h-auto">
            <div className="md:p-6 p-4">
                <Logo height={'h-16'} sizeText={'text-xl'}/>
                <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido a la Plataforma <br/> de Gestión de Proyectos</h2>
            </div>
            <form className="form-auth px-8 items-center" >
                <InputAuth 
                    name='user'
                    className='label-auth w-full'
                    label='Usuario:'
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
                    //  disabled={Object.keys(formData).length === 0}
                     loading={false}
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