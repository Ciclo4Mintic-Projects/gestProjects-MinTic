import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
    query Inscripciones {
        Inscripciones {
            _id
            proyecto {
                _id
                nombre
                lider {
                    nombre
                    apellido
                }
                estado
                fase
            }
            estudiante {
                nombre
                apellido
            }
            estado
            fechaIngreso
            fechaEgreso 
        }
    }
`;

const GET_INSCRIPCION = gql`
    query Inscripcion($_id: String!) {
    Inscripcion(_id: $_id) {
            _id
            proyecto {
                nombre
            }
            estudiante {
                nombre
                apellido
            }
            estado
            fechaIngreso
            fechaEgreso
        }
    }
`;

export { GET_INSCRIPCIONES, GET_INSCRIPCION };