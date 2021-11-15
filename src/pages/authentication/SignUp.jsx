import React, {useRef} from 'react';
import Logo from 'components/Logo';

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
                <div className="p-4">
                    <Logo height={'h-16'} sizeText={'text-xl'}/>
                    <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido al Resgistro <br/> Plataforma de Gestión de Proyectos</h2>
                </div>
                <form ref={formSignUp} onSubmit= {submitFormSignUp} className="form-signUp" >
                    <label htmlFor="nombre" className="label-signUp">
                        Nombre <br/>
                        <input
                        name = "nombre" 
                        className="input-signUp"
                        type="text"
                        placeholder="Ingrese su Nombre"
                        required
                        />
                    </label>
                    <label htmlFor="apellido" className="label-signUp">
                        Apellido <br/>
                        <input
                        name = "apellido" 
                        className="input-signUp"
                        type="text"
                        placeholder="Ingrese su Apellido"
                        required
                        />
                    </label>
                    <label htmlFor="identificacion" className="label-signUp">
                        Identificación <br/>
                        <input
                        name = "identificacion" 
                        className="input-signUp"
                        type="text"
                        placeholder="Ingrese su identificación"
                        required
                        />
                    </label>
                    <label htmlFor="rol" className="label-signUp">Rol <br/>
                        <select name="rol" className="input-signUp">           
                            <option value="" disabled selected >Rol a desempeñar</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Lider">Lider</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </label>
                    <label htmlFor="email" className="label-signUp">
                        Correo Electrónico <br/>
                        <input
                        name = "email" 
                        className="input-signUp"
                        type="email"
                        placeholder="Ingrese su correo electrónico"
                        required
                        />
                    </label>
                    <label htmlFor="contraseña" className="label-signUp">
                        Contraseña <br/>
                        <input
                        name = "contraseña" 
                        className="input-signUp"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        required
                        />
                    </label>                    
                    <label htmlFor="verificarCont" className="label-signUp">
                        Verificar Contraseña <br/>
                        <input
                        name = "VerificarCont" 
                        className="input-signUp"
                        type="password"
                        placeholder="Ingrese nuevamente su contraseña"
                        required
                        />
                    </label>                    
                </form>      
                <div className="p-8 m-2 grid grid-cols-2 place-items-center text-xs md:text-sm" >
                    <button className="cancel-button-auth">Cancelar</button>
                    <button className="accept-button-auth">Registrarse</button>
                </div>
            </div>
            
            
        </div>
    )
};

export default SignUp;