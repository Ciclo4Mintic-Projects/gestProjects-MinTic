import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import useFormData from 'hooks/useFormData'
import ButtonCircle from 'components/ButtonCircle'

import backArrow from 'assets/Arrow.svg'
import diskette from 'assets/diskette.svg'


const AvancesAdd = () => {

  const { form, formData, updateFormData } = useFormData(null)


  const submitForm = (e) => {
    // e.preventDefault();
    // console.log("form datas: ", formData);
    // editarAvance({
    //   variables: { ...formData, _id }
    // })
  }

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
              <p className=" text-purpleTem mb-4"><span className=" text-black font-bold">Proyecto</span>  NOMBRE DEL PROYECTO</p>

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

export default AvancesAdd
