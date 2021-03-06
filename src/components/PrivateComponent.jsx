import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ stateList, roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol) && stateList.includes(userData.estado)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;
