import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Index from 'pages/Index';
import IndexAvances from 'pages/Avances/Index'
import AvancesLog from 'pages/Avances/AvancesLog';
import AvancesAdd from 'pages/Avances/AvancesAdd';
import EstadoUsuarios from 'pages/usuarios/Index';
import EditarUsuario from 'pages/usuarios/Editar';
import 'styles/globals.css';
import SignUp from 'pages/auth/SignUp';
import Login from 'pages/auth/Login';
import Profile from 'pages/auth/Profile';
import Inscripcion from 'pages/inscripcion/Index';
import EditarInscripcion from 'pages/inscripcion/Editar';
import SupremacyContextProvider from 'context/supremacyContext';
import EstadoProyectos from 'pages/proyectos/EstadoProyectos';
import AuthLayout from 'layouts/AuthLayout';
import jwt_decode from 'jwt-decode';
import { AuthContext } from 'context/authContext';
import EditarProyectos from 'pages/proyectos/EditarProyectos';
import EditarProyectoLider from 'pages/proyectos/EditarProyectoLider';
import EditarProyectoAdmin from 'pages/proyectos/EditarProyectoAdmin';



const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token)
    if(token){
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      console.log(decoded);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
        estado: decoded.estado,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken}}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <SupremacyContextProvider>
            <BrowserRouter>
              <Routes> 
                <Route path='/auth' element={<AuthLayout/>}>
                  <Route path='registro' element={<SignUp />} />
                  <Route path='login' element={<Login />} />
                </Route>      
                <Route path='/' element={<PrivateLayout />}>
                  <Route path='' element={<Index />} />
                  <Route path='/perfil' element={<Profile />} />             
                  <Route path='proyectos' element={<EstadoProyectos />} /> 
                  <Route path='proyectos/editarLider/:_id' element={<EditarProyectoLider />} /> 
                  <Route path='proyectos/editarAdmin/:_id' element={<EditarProyectoAdmin />} /> 
                  <Route path='usuarios' element={<EstadoUsuarios />} />
                  <Route path='usuarios/editar/:_id' element={<EditarUsuario />} />
                  <Route path='inscripcion' element={<Inscripcion />} />
                  <Route path='inscripcion/editar/:_id' element={<EditarInscripcion />} />
                  <Route path='avances' element={<IndexAvances />} />
                  <Route path='avances/edit/:id' element={<AvancesLog />} />
                  <Route path='avances/add' element={<AvancesAdd />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SupremacyContextProvider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
