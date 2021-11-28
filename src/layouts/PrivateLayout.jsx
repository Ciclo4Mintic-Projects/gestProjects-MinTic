import Sidebar from 'components/Sidebar';
import Header from 'components/header';
import { Outlet } from 'react-router';
import React, { useEffect }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'context/authContext';
import { useMutation } from '@apollo/client';
import { VALIDATE_TOKEN } from 'graphql/auth/mutations';

const PrivateLayout = () => {

  const { authToken, setToken, loadingAuth } = useAuth();

  const [validateToken, { data: dataMutation, loading: loadingMutation, error: errorMutation}] =
  useMutation(VALIDATE_TOKEN);

  useEffect(() => {
    validateToken();
  }, [])

  return (

    <div className='flex flex-col md:flex-row sm:flex-no-wrap h-screen overflow-hidden'>
      <Sidebar />
      <div className='w-full overflow-hidden'>
        <Header />
        <div className='w-full h-5/6 overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
      <ToastContainer position='bottom-center' autoClose={2000} />
    </div>
  );
};

export default PrivateLayout;
