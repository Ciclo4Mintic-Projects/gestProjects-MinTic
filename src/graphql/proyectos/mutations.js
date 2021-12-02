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

const EDITAR_PROYECTO = gql`
    mutation EditarProyecto(
        $_id: String!, 
        $nombre: String, 
        $presupuesto: Float, 
        $estado: Enum_EstadoProyecto, 
        $fase: Enum_FaseProyecto, 
        $objetivoGeneral: String, 
        $objetivosEspecificos: [String]
        ) {
        editarProyecto(
            _id: $_id, 
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            estado: $estado, 
            fase: $fase, 
            objetivoGeneral: 
            $objetivoGeneral, 
            objetivosEspecificos: $objetivosEspecificos
        ) {
            _id
            nombre
            estado
            fase
            fechaFin
            fechaInicio
            presupuesto  
            }
        }
`;

export { CREAR_PROYECTO, EDITAR_PROYECTO };