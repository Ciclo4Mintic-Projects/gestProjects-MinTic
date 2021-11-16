import React, {useState} from 'react';
import Logo from 'components/Logo';

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    
    
  return(
    <div className="auth-screen h-screen">
        <div className="auth-container w-auto h-auto">
            <div className="md:p-6 p-4">
                <Logo height={'h-16'} sizeText={'text-xl'}/>
                <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido<br/> Plataforma de Gestión de Proyectos</h2>
            </div>
            <form className="form-auth px-8 items-center" >
                <label htmlFor="user" className="label-auth w-full">
                    <span className="hidden sm:grid">
                        Usuario <br/>
                    </span>
                    <input
                    name = "user" 
                    className="input-auth"
                    type="email"
                    placeholder="Ingrese su correo"
                    required
                    />
                </label>
                <label htmlFor="password" className="label-auth">
                    <span className="hidden sm:block">
                        Nombre 
                    </span>
                    <input
                    name = "password" 
                    className="input-auth"
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    required
                    />
                </label>
                <div className="md:p-4 py-2 px-0 mb-4 text-xs md:text-sm flex flex-col justify-between" >
                    <button className="accept-button-auth px-20">Ingresar</button>
                    <a className="link-register">Quiero registrarme</a>
                </div>
            </form>          
        </div>
    </div>
  )
}

export default Login;