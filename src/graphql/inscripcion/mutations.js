import { gql } from '@apollo/client';

const APROBAR_INSCRIPCION = gql`
  mutation AprobarInscripcion($_id: String!, $estado: Enum_EstadoInscripcion) {
    aprobarInscripcion(_id: $_id, estado: $estado  ) {
            estado
            fechaIngreso
        }
    }
`;

export { APROBAR_INSCRIPCION };