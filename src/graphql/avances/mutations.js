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
export { EDITAR_AVANCE }
