import React, {useRef} from 'react';
import Logo from 'components/Logo';
import InputAuth from 'components/InputAuth';

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
        <div className="auth-screen">
            <div className="auth-container">
                <div className="md:p-10 p-4">
                    <Logo height={'h-16'} sizeText={'text-xl'}/>
                    <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido al Resgistro <br/> Plataforma de Gestión de Proyectos</h2>
                </div>
                <form ref={formSignUp} onSubmit= {submitFormSignUp} className="form-auth" >
                    <InputAuth 
                    name='name'
                    className='label-auth'
                    label='Nombre:'
                    type='text'
                    placeholder='Ingrese su Nombre'
                    required
                    />
                    <InputAuth 
                    name='lastname'
                    className='label-auth'
                    label='Apellido:'
                    type='text'
                    placeholder='Ingrese su Apellido'
                    required
                    />
                    <InputAuth 
                    name='identification'
                    className='label-auth'
                    label='Identificación:'
                    type='text'
                    placeholder='Ingrese su identificación'
                    required
                    />                  
                    <label htmlFor="rol" className="label-auth">
                        <span className="hidden sm:block">
                          Rol: <br/>
                        </span>
                        <select required name="rol" className="input-auth text-grayTem">              
                            <option value="" disabled selected hidden label="Rol a desempeñar"></option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Lider">Lider</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </label>
                    <InputAuth 
                    name='email'
                    className='label-auth'
                    label='Correo Electrónico:'
                    type='email'
                    placeholder='Ingrese su correo electrónico'
                    required
                    />   
                    <InputAuth 
                    name='password'
                    className='label-auth'
                    label='Contraseña:'
                    type='password'
                    placeholder='Ingrese su contraseña'
                    required
                    />                     
                    <InputAuth 
                    name='verifypassword'
                    className='label-auth'
                    label='Verificar Contraseña:'
                    type='password'
                    placeholder='Ingrese nuevamente su contraseña'
                    required
                    />                     
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