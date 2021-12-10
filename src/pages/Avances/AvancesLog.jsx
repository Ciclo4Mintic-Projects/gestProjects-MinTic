import React, { useContext, useEffect } from 'react';
import ButtonCircle from 'components/ButtonCircle'
import ButtonPurple from 'components/ButtonPurple'
import diskette from 'assets/diskette.svg'
import backArrow from 'assets/Arrow.svg'
import { NavLink, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client'
import { GET_AVANCE } from 'graphql/avances/queries'
import useFormData from 'hooks/useFormData'
import { EDITAR_AVANCE } from 'graphql/avances/mutations';
import { CREAR_OBSERVACION } from 'graphql/avances/mutations'
import PrivateComponent from 'components/PrivateComponent';
import { SupremacyContext } from 'context/supremacyContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const AvancesLog = () => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
    setCurrentSection('Avances');
  }, []);

  const { form, formData, updateFormData } = useFormData(null)

  const { _id } = useParams()
  const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_AVANCE, {
    variables: { _id }
  })

  const [editarAvance, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(EDITAR_AVANCE)

  const [crearObservacion, { data: obsData, loading: obsLoading, error: obsError }] = useMutation(CREAR_OBSERVACION)

  const navigate = useNavigate()

  useEffect(() => {
    if (mutationData) {
      toast.success('Avance modificado correctamente')
      navigate("/avances")
    }
    if (obsData) {
      toast.success('Se ha guardado tu observación')
    }
  }, [mutationData, obsData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el avance')
    }
    if (obsError) {
      toast.error('Error al añadir la observación')
    }
  }, [mutationError, obsError]);

  if (queryLoading) { return <div>cargando...</div> }


  const submitForm = (e) => {
    e.preventDefault();
    console.log("form datas: ", formData);
    editarAvance({
      variables: { ...formData, _id }
    })
  }

  const submitForm2 = (e) => {
    e.preventDefault();
    console.log("form datas: ", formData);
    crearObservacion({
      variables: { ...formData, _id }
    })

  }


  return (
    <div>
      <PrivateComponent roleList={["ESTUDIANTE"]} stateList={["AUTORIZADO"]}>
        <div >
          <form className=" mx-12" onSubmit={submitForm} ref={form}>
            <h2 className="text-4xl font-bold  ">Edición de avance</h2>
            <div className="bg-backgContTem rounded-3xl mt-10 px-16 py-9">
              <div className="flex justify-between items-center">
                <div className="w-full">
                  <NavLink to={"/avances"}>
                    <img src={backArrow} className=" mb-8" alt="back arrow icon" />
                  </NavLink>
                  <p className=" text-purpleTem mb-4"><span className=" text-black font-bold">Proyecto</span>  {queryData.Avance.proyecto.nombre}</p>
                  <h6 className=" text-grayTem mt-14 mb-4">Título del avance:</h6>
                  <input
                    className="  text-3xl font-bold outline-none w-full"
                    defaultValue={queryData.Avance.titulo}
                    placeholder="Escribe el nombre del avance"
                    name="titulo"
                  />
                </div>
                <div className="flex">
                  <ButtonCircle label="guardar" update={updateFormData}>
                    <img src={diskette} alt="" />
                  </ButtonCircle>
                </div>
              </div>
              <h6 className=" text-grayTem mt-14 mb-4">Especifica acá los aportes de este avance:</h6>
              <textarea
                name="descripcion"
                id=""
                cols="170"
                rows="10"
                defaultValue={queryData.Avance.descripcion}
                className=" outline-none resize-none"
              >

              </textarea>
              <div>
                <h3 className=" font-bold text-2xl mb-4 text-purpleTem">Observaciones</h3>
                {queryData.Avance.observaciones.length == 0 &&
                  <p className=" text-grayTem">No hay observaciones creadas</p>
                }
                {
                  queryData.Avance.observaciones.length != 0 && queryData.Avance.observaciones.map(
                    obs => {
                      return (
                        <div>
                          <span className=" text-purpleTem fas fa-angle-right mr-2"></span>
                          <span className="text-black">{obs}</span>
                        </div>
                      )
                      {/* <p>{obs}</p> */ }
                    }
                  )
                }

              </div>
            </div>
          </form>
        </div>
      </PrivateComponent>
      <PrivateComponent roleList={["LIDER"]} stateList={["AUTORIZADO"]}>
        <div >
          <div className=" mx-12">
            <h2 className="text-4xl font-bold  ">Avance</h2>
            <div className="bg-backgContTem rounded-3xl mt-10 px-16 py-9">
              <div className="flex justify-between items-center">
                <div className="w-full">
                  <NavLink to={"/avances"}>
                    <img src={backArrow} className=" mb-8" alt="back arrow icon" />
                  </NavLink>
                  <p className=" text-purpleTem mb-4"><span className=" text-black font-bold">Proyecto</span>  {queryData.Avance.proyecto.nombre}</p>
                  <p className="  text-3xl font-bold outline-none w-full">{queryData.Avance.titulo}</p>
                </div>
              </div>
              <p className=" outline-none resize-none my-10"> {queryData.Avance.descripcion} </p>
              <div className="mt-8">
                <h3 className=" font-bold text-2xl mb-4 text-purpleTem">Observaciones</h3>

                {queryData.Avance.observaciones.length == 0 &&
                  <p className=" text-grayTem">No hay observaciones creadas</p>
                }
                {
                  queryData.Avance.observaciones.length != 0 && queryData.Avance.observaciones.map(
                    obs => {
                      return <div>
                        <span className=" text-purpleTem fas fa-angle-right mr-2"></span>
                        <span className="text-black">{obs}</span>
                      </div>
                    }
                  )
                }

                <form className="mt-6" action="" onSubmit={submitForm2} ref={form}>
                  <p className="text-grayTem mb-4">Escribe alguna observación:</p>
                  <input type="text" className=" w-9/12 h-12 px-2 mr-2 outline-none" name="observacion" />
                  <ButtonPurple update={updateFormData} >Enviar</ButtonPurple>
                </form>

              </div>
            </div>
          </div>
        </div>
      </PrivateComponent>
    </div>
  )
}




export default AvancesLog
