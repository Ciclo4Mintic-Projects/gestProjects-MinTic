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


export { GET_AVANCES }