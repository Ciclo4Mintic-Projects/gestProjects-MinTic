import { SupremacyContext } from "context/supremacyContext";
import React, {useState, useContext, useEffect} from "react";
import { useAuth } from 'context/authContext';

const DropdownHeader = () => {
    
    const { authToken, setToken, setAuthToken } = useAuth();

    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
        setDropdown(!dropdown)
    }

    const deleteToken = () => {     
        console.log(authToken)  
        setAuthToken(null)
        setToken(null);
      };

    useEffect(() => {
       console.log('auth token', authToken)
    }, [authToken])

    return ( 
        <div className="dropdown-container">
            <i class="fas fa-cog" onClick={() => openCloseDropdown()}></i>
            {
                dropdown && 
                <div class="dropdown-options">                            
                    <a href="/perfil">Editar perfil</a>
                    <a onClick={() => deleteToken()}>Cerrar sesión</a>
                </div>
            }
        </div>
    )
}


const Header = () => {

    const { currentSection } = useContext(SupremacyContext);

    return(
        <div className="header-container">
            <h1 className="self-center px-10 font-bold flex md:flex ">{currentSection}</h1>
            <div className="header-user">
                <DropdownHeader/>              
                <p className="self-center font-bold pl-10 pr-4 text-sm">Usuario</p>
                <i className="fas fa-solid fa-user"></i>
            </div>
        </div>
    )
}

export default Header;