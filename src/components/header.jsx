import { SupremacyContext } from "context/supremacyContext";
import React, {useState, useContext, useEffect} from "react";
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'context/userContext';

const DropdownHeader = () => {
    
    const navigate = useNavigate();

    const { setToken } = useAuth();
    
    const [dropdown, setDropdown] = useState(false);
    
    const openCloseDropdown = () => {
        setDropdown(!dropdown)
    }

    const deleteToken = () => { 
        setToken(null);
        navigate('/auth/login');
      };

    return ( 
        <div className="dropdown-container">
            <i class="fas fa-cog" onClick={() => openCloseDropdown()}></i>
            {
                dropdown && 
                <div class="dropdown-options">                            
                    <a href="/perfil">Editar perfil</a>
                    <a className='cursor-pointer' onClick={() => deleteToken()}>Cerrar sesión</a>
                </div>
            }
        </div>
    )
}


const Header = () => {

    const { currentSection } = useContext(SupremacyContext);

    const { userData } = useUser();
    
    return(
        <div className="header-container">
            <h1 className="self-center px-10 font-bold flex md:flex ">{currentSection}</h1>
            <div className="header-user">
                <DropdownHeader/>              
                <p className="self-center font-bold pl-10 pr-4 text-sm">{userData.nombre} {userData.apellido}</p>
                <i className="fas fa-solid fa-user"></i>
            </div>
        </div>
    )
}

export default Header;