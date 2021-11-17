import Sidebar from 'components/Sidebar';
import Header from 'components/header';
import { Outlet } from 'react-router';
import React from 'react';

const PrivateLayout = () => {
  return (

    <div className='flex flex-col md:flex-row sm:flex-no-wrap h-screen overflow-hidden'>
      <Sidebar />
      <div className='w-full overflow-hidden'>
        <Header />  
        <div className='w-full h-full overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
