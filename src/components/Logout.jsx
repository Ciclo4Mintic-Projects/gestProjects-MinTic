import React from "react";
import { useAuth } from 'context/authContext';
import SidebarRoute from "./SidebarRoute";


const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <SidebarRoute to='/auth/login' title='Salir' icon='fas fa-sign-out-alt' />
      </li>
    );
  };

  export default Logout;