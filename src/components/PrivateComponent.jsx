import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ stateList, roleList, children }) => {
  const { userData } = useUser();

  if ((stateList.includes(userData.estado)) && (roleList.includes(userData.rol))) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;
