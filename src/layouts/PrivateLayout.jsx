import Sidebar from 'components/Sidebar';
import Header from 'components/header';
import { Outlet } from 'react-router';
import React, { useEffect, useState }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'context/authContext';
import { useUser } from 'context/userContext';
import { useMutation } from '@apollo/client';
import { REFRESH_TOKEN } from 'graphql/auth/mutations';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


const PrivateLayout = () => {

  const navigate = useNavigate();

  const { userData, setUserData } = useUser();

  const { authToken, setToken } = useAuth();

  const [loadingAuth, setLoadingAuth] = useState(true);

  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation}] =
  useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
      if(!authToken){
      let localToken = localStorage.getItem('token')
      if(localToken){
        setToken(JSON.parse(localToken))
      }else {
        setToken(null);
        navigate('/auth/login');
      }
    }
  }, [navigate]);

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
