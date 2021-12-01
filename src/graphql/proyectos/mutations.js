import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`
    mutation CrearProyecto(
      $nombre: String!, 
      $presupuesto: Float!, 
      $lider: String!, 
      $objetivoGeneral: String!, 
      $objetivosEspecificos: [String]!
    ) {
    crearProyecto(
        nombre: $nombre, 
        presupuesto: $presupuesto, 
        lider: $lider, 
        objetivoGeneral: $objetivoGeneral, 
        objetivosEspecificos: $objetivosEspecificos
    ) {
        _id
        nombre
        lider {
            _id
        }
        estado
        fase
        fechaInicio
        fechaFin
        }
    }
`;

export { CREAR_PROYECTO };