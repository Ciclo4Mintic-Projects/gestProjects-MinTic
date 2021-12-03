import {gql} from "@apollo/client";

const REGISTRO = gql`
    mutation Registro(
        $nombre: String!
        $apellido: String!
        $identificacion: String!
        $correo: String!
        $rol: Enum_Rol!
        $password: String! 
        $verifypassword: String! 
    ) {
        registro(
            nombre: $nombre
            apellido: $apellido
            identificacion: $identificacion
            correo: $correo
            rol: $rol
            password: $password
            verifypassword: $verifypassword
        ){
            token
            error
        }
  }
`;

const LOGIN = gql`
  mutation Login($correo: String!, $password: String!) {
    login(correo: $correo, password: $password) {
      token
      error
    }
  }
`;

const CAMBIAR_PASSWORD = gql`    
    mutation CambiarPassword(
      $_id: String!,
      $password: String!, 
      $newpassword: String!, 
      $verifypassword: String!) 
      {
        cambiarPassword(
          _id: $_id, 
          password: $password, 
          newpassword: $newpassword, 
          verifypassword: $verifypassword
          ) {
            message,
            type
          }
       }
`;

const REFRESH_TOKEN = gql`
mutation RefreshToken {
  refreshToken {
    token
    error
  }
}
`

export { REGISTRO, LOGIN, CAMBIAR_PASSWORD, REFRESH_TOKEN };