import React, { useState, useEffect } from 'react'
import ButtonCircle from 'components/ButtonCircle'
import diskette from 'assets/diskette.svg'
import backArrow from 'assets/Arrow.svg'
import { data } from './fakeData'
import { NavLink, useParams } from 'react-router-dom';
const AvancesLog = () => {
  const progressData = data;

  const { id } = useParams()

  const log = progressData.find(log => log.id == id)

  const [content, setContent] = useState(log.content)
  const [name, setName] = useState(log.avance)
  const [project, setProject] = useState(log.proyecto)


  return (

    <div className=" bg-backgContTem">
      <div className=" mt-36 mx-12">
        <h2 className="text-4xl font-bold  ">Avances</h2>
        <div className="bg-white rounded-3xl mt-10 px-16 py-9">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <NavLink to={"/avances"}>
                <img src={backArrow} className=" mb-8" alt="back arrow icon" />
              </NavLink>
              <p className=" text-grayTem mb-4">{project}</p>
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
            {log.observaciones.length > 0 &&
              <ul>
                {log.observaciones.map(observ => {
                  return (
                    <li className=" mt-7 mb-8">
                      <span className="font-bold text-purpleTem">{observ.name}</span> {observ.label} <br /> <span className=" text-grayTem">{observ.date}</span>
                    </li>
                  )
                })}
              </ul>
            }
            {log.observaciones.length == 0 &&
              <p className=" text-grayTem">No hay observaciones creadas</p>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default AvancesLog
