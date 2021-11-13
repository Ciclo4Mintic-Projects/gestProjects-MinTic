import React from 'react'
import ButtonCircle from 'components/ButtonCircle'
import diskette from 'assets/diskette.svg'
const ProgressLog = () => {
  return (
    <div className=" bg-backgContTem">
      <div className=" mt-36 mx-12">
        <h2 className="text-4xl font-bold  ">Avances</h2>
        <div className="bg-white rounded-3xl mt-10 px-16 py-9">
          <div className="flex justify-between items-center">
            <div>
              <p className=" text-grayTem">nombre proyecto</p>
              <p className=" text-3xl font-bold">nombre avance</p>
            </div>
            <div className="flex">
              <ButtonCircle>
                <img src={diskette} alt="" />
              </ButtonCircle>
              <ButtonCircle>+</ButtonCircle>
            </div>
          </div>
          <h6>specifica acá los aportes de este avance</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus, modi veritatis consequuntur delectus quia iure incidunt dolorem odio cum, unde velit, harum non laboriosam id quod? Rerum, dolores alias!</p>

          <div>
            <h3>Observaciones</h3>
            <ul>
              <li>
                name <span>Lorem Ipsim dolor</span>
              </li>
              <li>
                name <span>Lorem Ipsim dolor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div >
  )
}

export default ProgressLog
