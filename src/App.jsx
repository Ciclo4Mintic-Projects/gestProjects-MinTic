import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import EstadoUsuarios from 'pages/usuarios/EstadoUsuarios';
import 'styles/globals.css';
import SignUp from 'pages/authentication/SignUp';
import Login from 'pages/authentication/Login';
import Profile from 'pages/authentication/Profile';
import Inscripcion from 'pages/Inscripcion';
import SupremacyContextProvider from 'context/supremacyContext';

// import PrivateRoute from 'components/PrivateRoute';

function App() {  
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain='misiontic-concesionario.us.auth0.com'
      clientId='WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g'
      redirectUri='http://localhost:3000/admin'
      audience='api-autenticacion-concesionario-mintic'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <SupremacyContextProvider>
          <BrowserRouter>
            <Routes>       
                <Route path='/register' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
              <Route path='/' element={<PrivateLayout />}>
                <Route path='' element={<Index />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='page2' element={<Page2 />} />
                <Route path='category1' element={<IndexCategory1 />} />
                <Route path='category1/page1' element={<Category1 />} />
                <Route path='usuarios/estado' element={<EstadoUsuarios />} />
                <Route path='inscripcion' element={<Inscripcion />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SupremacyContextProvider>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
