import React, {useRef} from 'react';
import Logo from 'components/Logo';
import { colors } from '@material-ui/core';

const SignUp = () => {

    const formSignUp = useRef(null);

    const submitFormSignUp = (e) => {
        e.preventDefault();
        const fd = new FormData(formSignUp.current); 

        const newUser = {};
        fd.forEach((value, key) => {
            newUser[key] = value;
        });
    }

    return (
        <div className="signUp-screen">
            <div className="signUp-container">
                <div className="md:p-10 p-4">
                    <Logo height={'h-16'} sizeText={'text-xl'}/>
                    <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido al Resgistro <br/> Plataforma de Gestión de Proyectos</h2>
                </div>
                <form ref={formSignUp} onSubmit= {submitFormSignUp} className="form-signUp" >
                    <label htmlFor="nombre" className="label-signUp">
                        <span className="hidden sm:block">
                            Nombre <br/>
                        </span>
                        <input
                        name = "nombre" 
                        className="input-signUp"
                        type="text"
                        placeholder="Ingrese su Nombre"
                        required
                        />
                    </label>
                    <label htmlFor="apellido" className="label-signUp">
                        <span className="hidden sm:block">
                            Apellido <br/>
                        </span>
                        <input
                        name = "apellido" 
                        className="input-signUp"
                        type="text"
                        placeholder="Ingrese su Apellido"
                        required
                        />
                    </label>
                    <label htmlFor="identificacion" className="label-signUp">
                        <span className="hidden sm:block">
                            Identificación <br/>
                        </span>
                        <input
                        name = "identificacion" 
                        className="input-signUp"
                        type="text"
                        placeholder="Ingrese su identificación"
                        required
                        />
                    </label>
                    <label htmlFor="rol" className="label-signUp">
                        <span className="hidden sm:block">
                          Rol <br/>
                        </span>
                        <select required name="rol" className="input-signUp text-grayTem">              
                            <option value="" disabled selected hidden label="Rol a desempeñar"></option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Lider">Lider</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </label>
                    <label htmlFor="email" className="label-signUp">
                        <span className="hidden sm:block">
                            Correo Electrónico <br/>
                        </span>
                        <input
                        name = "email" 
                        className="input-signUp"
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        required
                        />
                    </label>
                    <label htmlFor="contraseña" className="label-signUp">
                        <span className="hidden sm:block">
                            Contraseña <br/>
                        </span>
                        <input
                        name = "contraseña" 
                        className="input-signUp"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        required
                        />
                    </label>                    
                    <label htmlFor="verificarCont" className="label-signUp">
                        <span className="hidden sm:block">
                            Verificar Contraseña <br/>
                        </span>
                        <input
                        name = "VerificarCont" 
                        className="input-signUp"
                        type="password"
                        placeholder="Ingrese nuevamente su contraseña"
                        required
                        />
                    </label>                    
                </form>      
                <div className="md:p-8 p-2 m-2 grid grid-cols-2 place-items-center text-xs md:text-sm" >
                    <button className="cancel-button-auth">Cancelar</button>
                    <button className="accept-button-auth">Registrarse</button>
                </div>
            </div>
            
            
        </div>
    )
};

export default SignUp;