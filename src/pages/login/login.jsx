import React from 'react'
import Logo from 'components/Logo';

const Login = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-purpleHover to-purpleTem">
            <div className="h-4/5 w-2/6 rounded-lg bg-purpleTem10">
                <div className="p-4">
                    <Logo height={'h-16'} sizeText={'text-xl'}/>
                    <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido al Resgistro <br/> Plataforma de Gestión de Proyectos</h2>
                </div>
                <form action="">
                    
                </form>

            </div>
            
            
        </div>
    )
};

export default Login;