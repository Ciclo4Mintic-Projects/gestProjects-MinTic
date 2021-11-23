import { SupremacyContext } from "context/supremacyContext";
import React, {useState, useContext} from "react";

const DropdownHeader = () => {
    
    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
        setDropdown(!dropdown)
    }

    return ( 
        <div className="dropdown-container">
            <i class="fas fa-cog" onClick={() => openCloseDropdown()}></i>
            {
                dropdown && 
                <div class="dropdown-options">                            
                    <a href="/profile">Editar perfil</a>
                    <a href="/login">Cerrar sesión</a>
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