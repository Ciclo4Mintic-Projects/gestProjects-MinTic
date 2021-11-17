import { SupremacyContext } from 'context/supremacyContext';
import React, {useRef, useContext, useEffect} from 'react';

const Profile = () => {

    const formProfile = useRef(null);

    const { setCurrentSection } = useContext(SupremacyContext);

    useEffect(() => {
        setCurrentSection('Editar Perfil');
    }, [])

    const submitFormProfile = (e) => {
        e.preventDefault();
        const fd = new FormData(formProfile.current); 

        const editProfile = {};
        fd.forEach((value, key) => {
            editProfile[key] = value;
        });
    }

    return (

        <div className="profile-container">    
            <form ref={formProfile} onSubmit= {submitFormProfile} className="form-profile" >
                <label htmlFor="nombre" className="label-auth">
                    <span className="hidden sm:block">
                        Nombre <br/>
                    </span>
                    <input
                    name = "nombre" 
                    className="input-auth"
                    type="text"
                    placeholder="Luis"
                    required
                    />
                </label>
                <label htmlFor="apellido" className="label-auth">
                    <span className="hidden sm:block">
                        Apellido <br/>
                    </span>
                    <input
                    name = "apellido" 
                    className="input-auth"
                    type="text"
                    placeholder="Zapata"
                    required
                    />
                </label>
                <label htmlFor="identificacion" className="label-auth">
                    <span className="hidden sm:block">
                        Identificación <br/>
                    </span>
                    <input
                    name = "identificacion" 
                    className="input-auth"
                    type="text"
                    placeholder="123456789"
                    required
                    />
                </label>
                <label htmlFor="rol" className="label-auth">
                    <span className="hidden sm:block">
                        Rol <br/>
                    </span>
                    <input className="input-auth text-grayTem"
                    name = "identificacion" 
                    className="input-auth"
                    type="text"
                    placeholder="Lider"
                    disabled
                    > 
                    </input>
                </label>
                <label htmlFor="email" className="label-auth">
                    <span className="hidden sm:block">
                        Correo Electrónico <br/>
                    </span>
                    <input
                    name = "email" 
                    className="input-auth"
                    type="email"
                    placeholder="luiszapata@hotmail.com"
                    required
                    />
                </label>
                <label htmlFor="contraseña" className="label-auth">
                    <span className="hidden sm:block">
                        Contraseña <br/>
                    </span>
                    <input
                    name = "contraseña" 
                    className="input-auth"
                    type="password"
                    placeholder="********"
                    required
                    />
                </label>                    
                <label htmlFor="verificarCont" className="label-auth">
                    <span className="hidden sm:block">
                        Verificar Contraseña <br/>
                    </span>
                    <input
                    name = "VerificarCont" 
                    className="input-auth"
                    type="password"
                    placeholder="********"
                    required
                    />
                </label>                    
            </form>      
            <div className="p-2 grid grid-cols-2 place-items-center text-xs md:text-xs" >
                <button className="cancel-button-auth">Cancelar</button>
                <button className="accept-button-auth">Aceptar</button>
            </div>
        </div>            

    )
}

export default Profile;