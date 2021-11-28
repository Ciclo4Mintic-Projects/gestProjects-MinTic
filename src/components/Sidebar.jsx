import React, { useState } from 'react';
import Logo from './Logo';
import SidebarRoute from './SidebarRoute';
import Logout from './Logout';

const SidebarLinks = () => {
  return (
    <ul className='mt-1 md:mt-12 sidebar-links'>
      <SidebarRoute to='' title='Inicio' icon='fas fa-home' />
      <SidebarRoute to='/usuarios' title='Usuarios' icon='fas fa-users' />
      <SidebarRoute to='/proyectos' title='Proyectos' icon='fas fa-project-diagram' />
      <SidebarRoute to='/inscripcion' title='Inscripciones' icon='fas fa-user-plus' />
      <SidebarRoute to='/avances' title='avances' icon='fas fa-pen' />
      <SidebarRoute to='/perfil' title='Perfil' icon='fas fa-solid fa-user' />     
      <Logout/>
    </ul>
  );
};


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col font-poppins bg-white md:flex-row flex-no-wrap '>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex'>
        <div className='p-8'>
          <Logo height={'h-16'} sizeText={'text-xl'} />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between p-2 text-white navbar-responsive items-center'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <div className="p-0">
          <Logo height={'h-10'} sizeText={'text-xs'} />
        </div>
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
        <div className='px-2 md:px-8'>
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};



export default Sidebar;
