import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
    $_id: String!
    $nombre: String
    $apellido: String
    $identificacion: String
    $correo: String
    $estado: Enum_EstadoUsuario
  ) {
    editarUsuario(
      _id: $_id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      estado: $estado
    ) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
    }
  }
`;

const EDITAR_PERFIL = gql`
  mutation EditarPerfil(
    $_id: String!
    $nombre: String!
    $apellido: String!
    $identificacion: String!
    $correo: String!
  ) {
    editarPerfil(
      _id: $_id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
    ) {
      token
      error
    }
  }
`;

export { EDITAR_USUARIO, EDITAR_PERFIL };