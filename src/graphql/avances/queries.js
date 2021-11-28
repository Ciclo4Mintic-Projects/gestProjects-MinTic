import { gql } from "@apollo/client";

const GET_AVANCES = gql`
  query Avances {
    Avances {
      titulo
      descripcion
      fecha
      observaciones
      _id
      creadoPor {
        nombre
        _id
      }  
      proyecto {
        nombre
        _id
      }
    }
  }

`

const GET_AVANCE = gql`
  query Avance($_id: String!) {
    Avance(_id: $_id) {
      _id
      titulo
      descripcion
      fecha
      observaciones
      proyecto{
        _id
        nombre
      }
    }
  }
`

export { GET_AVANCES, GET_AVANCE }