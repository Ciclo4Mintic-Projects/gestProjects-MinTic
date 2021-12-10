import { gql } from '@apollo/client'

const EDITAR_AVANCE = gql`
  mutation EditarAvance(
    $_id: String!
    $titulo: String!
    $descripcion: String!
  ) {
    editarAvance(
      _id:$_id
      titulo: $titulo
      descripcion: $descripcion
    ){
      _id
      titulo
      descripcion
    }
  }
`

const CREAR_AVANCE = gql`
  mutation CrearAvance(
    $fecha: Date!
    $descripcion: String! 
    $proyecto: String! 
    $creadoPor: String! 
    $titulo: String!
  ){
    crearAvance(
      fecha: $fecha
      descripcion: $descripcion
      proyecto: $proyecto
      creadoPor: $creadoPor
      titulo: $titulo
    ){
      mensaje
      estado
    }
  }

`

const ELIMINAR_AVANCE = gql`
mutation EliminarAvance(
  $_id: String!
){
  eliminarAvance(
    _id: $_id
  ){
    _id
    titulo
  }
}
`


const CREAR_OBSERVACION = gql`
mutation CrearObservacion(
  $_id: String!
  $observacion: String
  ){
  crearObservacion(
    _id: $_id
    observacion: $observacion
    ){
    _id
    titulo
    observaciones
  }
}



`

export { EDITAR_AVANCE, CREAR_AVANCE, ELIMINAR_AVANCE, CREAR_OBSERVACION }
