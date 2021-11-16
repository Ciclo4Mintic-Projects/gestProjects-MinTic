import React, { useState } from 'react'
import ButtonCircle from 'components/ButtonCircle'
import diskette from 'assets/diskette.svg'
import backArrow from 'assets/Arrow.svg'
const ProgressLog = () => {

  const [content, setContent] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus, modi veritatis consequuntur delectus quia iure incidunt dolorem odio cum, unde velit, harum non laboriosam id quod? Rerum, dolores alias!")
  const [name, setName] = useState("Nombre del avance")

  return (
    <div className=" bg-backgContTem">
      <div className=" mt-36 mx-12">
        <h2 className="text-4xl font-bold  ">Avances</h2>
        <div className="bg-white rounded-3xl mt-10 px-16 py-9">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <img src={backArrow} className=" mb-8" />
              <p className=" text-grayTem mb-4">nombre proyecto</p>
              <input
                className="  text-3xl font-bold outline-none w-full"
                value={name}
                placeholder="Escribe el nombre del avance"
                onChange={e => { setName(e.target.value) }}
              />
            </div>
            <div className="flex">
              <ButtonCircle>
                <img src={diskette} alt="" />
              </ButtonCircle>
              <ButtonCircle>+</ButtonCircle>
            </div>
          </div>
          <h6 className=" text-grayTem mt-24 mb-9">Especifica acá los aportes de este avance:</h6>
          {/* <input className=" w-full h-28" value={content} onChange={e => { setContent(e.target.value) }} /> */}
          <textarea
            name=""
            id=""
            cols="170"
            rows="10"
            onChange={e => { setContent(e.target.value) }}
            className=" outline-none resize-none">
            {content}
          </textarea>
          <div>
            <h3 className=" font-bold text-2xl">Observaciones</h3>
            <ul>
              <li className=" mt-7 mb-8">
                <span className="font-bold text-purpleTem">name</span> Lorem Ipsim dolor <br /> <span className=" text-grayTem">Junio 31 2021</span>
              </li>
              <li>
                <span className="font-bold text-purpleTem">name</span> Lorem Ipsim dolor <br /> <span className=" text-grayTem">Julio 01 2021</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProgressLog
