import { gql } from '@apollo/client';

const APROBAR_INSCRIPCION = gql`
  mutation AprobarInscripcion($_id: String!, $estado: Enum_EstadoInscripcion) {
    aprobarInscripcion(_id: $_id, estado: $estado  ) {
            estado
            fechaIngreso
        }
    }
`;

const CREAR_INSCRIPCION = gql`
  mutation CrearInscripcion($proyecto: String!, $estudiante: String!) {
  crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
    _id
    }
  }
`;

const TERMINAR_INSCRIPCION = gql`
 mutation Mutation($proyecto: String!) {
  inscripcionTerminada(proyecto: $proyecto) {
  _id
  estado
  }
}
`;

export { APROBAR_INSCRIPCION, CREAR_INSCRIPCION, TERMINAR_INSCRIPCION };