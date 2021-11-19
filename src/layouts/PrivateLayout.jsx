import Sidebar from 'components/Sidebar';
import Header from 'components/header';
import { Outlet } from 'react-router';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer position='bottom-center' autoClose={2000} />
    </div>
  );
};

export default PrivateLayout;
