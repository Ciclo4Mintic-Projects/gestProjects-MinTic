import { SupremacyContext } from 'context/supremacyContext';
import React, {useContext, useEffect} from 'react';

const Index = () => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
    setCurrentSection('Inicio');
  }, [])

  return (
    <div className="bg-backgContTem">
      <div className='h-96'>Index page</div>
      <div className='h-96'>Index page</div>
      <div className='h-96'>Index page</div>
      <div className='h-96'>Index page</div>
    </div>
  );
};

export default Index;
