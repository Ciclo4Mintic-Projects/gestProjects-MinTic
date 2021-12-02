import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
  query Proyectos {
  Proyectos {
    _id
    nombre
    presupuesto
    fechaInicio
    fechaFin
    estado
    fase
    lider {
      nombre
      apellido
    }
    avances {
      descripcion
    }
    objetivoGeneral
  }
}
`;

const GET_PROYECTO = gql`
  query Query($_id: String!) {
    Proyecto(_id: $_id) {
      _id
      nombre
      presupuesto
      estado
      fase
      objetivoGeneral
      objetivosEspecificos
    }
  }
`;

export { GET_PROYECTOS, GET_PROYECTO};