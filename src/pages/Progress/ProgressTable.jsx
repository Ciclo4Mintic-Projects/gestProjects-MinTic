import React from 'react'

const ProgressTable = () => {
  return (
    <table className="grid mt-28 grid-rows-2">
      <tr className=" grid row-start-1 grid-cols-5">
        <th className="">Creador</th>
        <th>Proyecto</th>
        <th>Avance</th>
        <th>Observaciones</th>
        <th>Detalles</th>
      </tr>
      <tr className="grid row-start-2 grid-cols-5 justify-items-center">
        <td>Samanta William</td>
        <td>Proyecto 003</td>
        <td>Avance#1</td>
        <td>0</td>
        <td>Boton</td>
      </tr>
    </table>
  )
}

export default ProgressTable
