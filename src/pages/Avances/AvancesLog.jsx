import React from 'react'
import ButtonCircle from 'components/ButtonCircle'
import diskette from 'assets/diskette.svg'
import backArrow from 'assets/Arrow.svg'
import { NavLink, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client'
import { GET_AVANCE } from 'graphql/avances/queries'
import useFormData from 'hooks/useFormData'
import { EDITAR_AVANCE } from 'graphql/avances/mutations';
const AvancesLog = () => {

  const { form, formData, updateFormData } = useFormData(null)

  const { _id } = useParams()
  const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_AVANCE, {
    variables: { _id }
  })

  const [editarAvance, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(EDITAR_AVANCE)


  if (queryLoading) { return <div>cargando...</div> }


  const submitForm = (e) => {
    e.preventDefault();
    console.log("form datas: ", formData);
    editarAvance({
      variables: { ...formData, _id }
    })
  }

  return (
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
              <ButtonCircle>+</ButtonCircle>
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
            <h3 className=" font-bold text-2xl">Observaciones</h3>
            {queryData.Avance.observaciones.length > 0 &&
              <ul>
                {queryData.Avance.observaciones.map(observ => {
                  return (
                    <li className=" mt-7 mb-8">
                      <span className="font-bold text-purpleTem">{observ.name}</span> {observ.label} <br /> <span className=" text-grayTem">{observ.date}</span>
                    </li>
                  )
                })}
              </ul>
            }
            {queryData.Avance.observaciones.length == 0 &&
              <p className=" text-grayTem">No hay observaciones creadas</p>
            }

          </div>
        </div>
      </form>
    </div>
  )
}


export default AvancesLog
