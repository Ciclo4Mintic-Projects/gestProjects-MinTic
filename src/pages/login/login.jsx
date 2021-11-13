import React from 'react'
import Logo from 'components/Logo';

const Login = () => {
    return (
        <div className="bg-purpleTem h-screen w-screen flex justify-center items-center bg-gradient-to-r from-purpleHover to-purpleTem">
            <div className="bg-white h-4/5 w-2/6 rounded-lg bg-purpleTem10">
                <Logo/>
                 <h2>Resgistro a la plataforma de gestión de proyectos</h2>

            </div>
            
            
        </div>
    )
};

export default Login;