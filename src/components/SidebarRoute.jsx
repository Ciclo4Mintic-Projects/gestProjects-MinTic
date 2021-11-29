import React from "react";
import { NavLink } from 'react-router-dom';

const SidebarRoute = ({ to, title, icon }) => {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            isActive
              ? 'sidebar-route text-blackTem font-bold bg-purpleTem10 navlink-selected'
              : 'sidebar-route text-grayTem hover:text-blackTem font-bold'
          }
        >
          <div className='flex items-center'>
            <div className="icon-selected">
              <i className={icon} />
            </div>
            <span className='text-sm ml-2'>{title}</span>
          </div>
        </NavLink>
      </li>
    );
  };

export default SidebarRoute;