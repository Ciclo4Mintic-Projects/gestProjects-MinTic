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

export { APROBAR_INSCRIPCION, CREAR_INSCRIPCION };