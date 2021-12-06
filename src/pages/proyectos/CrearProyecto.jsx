import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import DropDown from 'components/Dropdown';
import { Enum_EstadoInscripcion } from 'utils/enum';
import { CREAR_PROYECTO } from 'graphql/proyectos/mutations';
import { useUser } from 'context/userContext';
import { SupremacyContext } from 'context/supremacyContext';

const CrearProyecto = () => {

    const { setCurrentSection } = useContext(SupremacyContext);

    useEffect(() => {
        setCurrentSection('Proyectos');
    }, []);


    const {userData} = useUser();
    const { form, formData, updateFormData } = useFormData(null);
    const [objetivos, setObjetivos] = useState([]);
    const [objetivo, setObjetivo] = useState("");

    const [crearProyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(CREAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();        
        delete formData.rol;
        formData.presupuesto = parseFloat(formData.presupuesto)
        crearProyecto({
            variables: {...formData, lider: userData._id, objetivosEspecificos: objetivos},
        });
    };

    useEffect(() => {
        if (mutationData) {
            toast.success('Inscripcion modificada correctamente');
            window.location.href = "/proyectos"
        }
    }, [mutationData]);

    useEffect(() => {
        if (mutationError) {
            toast.error('Error modificando el inscripcion');
        }
    }, [mutationError]);

    const handleChange = (evento) => {
        setObjetivo(evento.target.value)
    }

    const agregarObjetivo = () => {
        objetivos.push(objetivo);
        setObjetivo("")
    }

    
    useEffect(()=>{
        console.log("objetivo:",objetivo)
        console.log("objetivos",objetivos)
    }, [objetivos, objetivo])


    return (
        <div className='flew flex-col h-full items-center justify-center p-10 border border-gray-400 rounded-xl ml-10 mr-10 bg-grayLight'>
            <Link to='/proyectos'>
                <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Crear proyecto</h1>

            <div className='mx-24 font-bold'>
                <span>Objetivos especificos:</span>
                <input type="text" onChange={handleChange} value={objetivo} className='block w-full'/>
                
                <button onClick={agregarObjetivo} className='inline my-2 bg-indigo-700 hover:bg-indigo-500 text-purpleTem10 m-4 p-2 font-bold text-sm rounded-3xl'>agregar objetivo</button>
                <span className="block">objetivos especificos agregados:</span>
                <ul className='font-light'>
                    {objetivos.map((objetivo, index)=> {return <li>{index+1}. {objetivo}</li>})}
                </ul>
            </div>
            
            

            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'
            >
                <Input label='Nombre:' name='nombre' type='text' required />
                <Input label='Presupuesto:' name='presupuesto' type='number' required />
                <Input label='Objetivo general:' name='objetivoGeneral' type='text' required />          



                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Confirmar'
                />
            </form>
        </div>
    );
};

export default CrearProyecto;