import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import useFormData from 'hooks/useFormData'
import ButtonCircle from 'components/ButtonCircle'
import { useQuery, useMutation } from '@apollo/client'
import DropDown from 'components/Dropdown'
import backArrow from 'assets/Arrow.svg'
import diskette from 'assets/diskette.svg'
import { GET_PROYECTOS } from 'graphql/proyectos/queries'

const AvancesAdd = () => {

  const { form, formData, updateFormData } = useFormData(null)

  const { data: queryData, error: queryError, loading: queryLoading } = useQuery(GET_PROYECTOS)


  console.log(queryData)
  const submitForm = (e) => {
    // e.preventDefault();
    // console.log("form datas: ", formData);
    // editarAvance({
    //   variables: { ...formData, _id }
    // })
  }
  if (queryLoading) {
    return <div>Cargando...</div>
  }

  if (queryData) {

    return (
      <div >
        <form className="  mx-12" onSubmit={submitForm} ref={form}>
          <h2 className="text-4xl font-bold  ">Agregar Avance</h2>
          <div className="bg-backgContTem rounded-3xl mt-10 px-16 py-9">
            <div className="flex justify-between items-center">
              <div className="w-full">
                <NavLink to={"/avances"}>
                  <img src={backArrow} className=" mb-8" alt="back arrow icon" />
                </NavLink>
                <div className="flex mb-4">

                  <p className=" self-center  text-black font-bold text-3xl mr-4">Proyecto:</p>
                  <DropDown
                    name="proyecto"
                    defaultValue=""
                    options={queryData.Proyectos.map(p => p.nombre)}
                    required={true}
                  />
                </div>
                <input
                  className="  text-3xl font-bold outline-none w-full"
                  defaultValue=""
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
            <h6 className=" text-grayTem mt-24 mb-9">Especifica acá los aportes de este avance:</h6>
            <textarea
              name="descripcion"
              id=""
              cols="170"
              rows="10"
              defaultValue=""
              className=" outline-none resize-none"
              placeholder="Escribe algo"
            >

            </textarea>

          </div>
        </form>
      </div>
    )
  }
}

export default AvancesAdd
