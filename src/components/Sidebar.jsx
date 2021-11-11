import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLinks = () => {
  return (
    <ul className='mt-12'>
      <SidebarRoute to='' title='Inicio' icon='fas fa-home' />
      <SidebarRoute to='/page2' title='Pagina2' icon='fas fa-smile-wink' />
      <SidebarRoute to='/category1' title='Catego 1' icon='fab fa-amazon' />
      <SidebarRoute to='/category1/page1' title='Test' icon='fas fa-car' />
    </ul>
  );
};

const Logo = () => {
  return (
    <div className='py-8 w-full flex items-center justify-center'>
      <img src='/images/logo.png' alt='Logo' className='h-16 mr-1' />
      <span className='my-2 text-xl font-poppins font-bold text-center'>Supremacy</span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col font-poppins bg-white md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between p-2 text-white navbar-responsive'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

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
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
