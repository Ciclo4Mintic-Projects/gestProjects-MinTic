import React, {useRef} from 'react';
import Logo from 'components/Logo';
import InputAuth from 'components/InputAuth';
import ButtonAccept from 'components/ButtonAccept';
import useFormData from 'hooks/useFormData';
import DropdownAuth from 'components/DropdownAuth';
import { Enum_Rol } from 'utils/enum';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { form, formData, updateFormData } = useFormData();

    const submitFormSignUp = (e) => {
        e.preventDefault();
    };
   
    return (
        <div className="auth-screen">
            <div className="auth-container">
                <div className="md:p-10 p-4">
                    <Logo height={'h-16'} sizeText={'text-xl'}/>
                    <h2 className="text-sm text-center mt-4 text-purpleHover font-bold">Bienvenido al Resgistro <br/> Plataforma de Gestión de Proyectos</h2>
                </div>
                <form ref={form} onSubmit= {submitFormSignUp} onChange={updateFormData} className="form-auth" >
                    <InputAuth 
                        name='name'
                        className='label-auth'
                        label='Nombre:'
                        type='text'
                        placeholder='Ingrese su Nombre'
                        defaultValue=''
                        required
                    />
                    <InputAuth 
                        name='lastname'
                        className='label-auth'
                        label='Apellido:'
                        type='text'
                        placeholder='Ingrese su Apellido'
                        defaultValue=''
                        required
                    />
                    <InputAuth 
                        name='identification'
                        className='label-auth'
                        label='Identificación:'
                        type='text'
                        placeholder='Ingrese su identificación'
                        defaultValue=''                    
                        required
                    />    
                     <DropdownAuth
                        label='Rol:'
                        name='rol'                    
                        required={true}
                        options={Enum_Rol}
                    />              
                    <InputAuth 
                        name='email'
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
                        required
                    />                     
                </form>      
                <div className="md:p-8 p-2 m-2 grid grid-cols-2 place-items-center text-xs md:text-sm" >
                    <button  className="cancel-button-auth">         
                        <Link to= '/auth/login'>
                            Cancelar
                        </Link>
                    </button>
                    <ButtonAccept
                     disabled={Object.keys(formData).length === 0}
                     loading={false}
                     text='Registrarme'
                     className='accept-button-auth'
                    />
                </div>
            </div>            
        </div>
    )
};

export default SignUp;