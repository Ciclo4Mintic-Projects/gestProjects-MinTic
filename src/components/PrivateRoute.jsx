import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ stateList, roleList, children }) => {
  const { userData } = useUser();

  if (stateList.includes(userData.estado) && roleList.includes(userData.rol)) {
    return children;
  }

  return <div data-testid="not-authorized" className='text-6xl text-center font-bold my-auto text-purpleHover '>No estás autorizado para ver este sitio.</div>;
};

export default PrivateRoute;
