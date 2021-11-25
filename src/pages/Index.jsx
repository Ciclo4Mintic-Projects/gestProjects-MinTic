import { SupremacyContext } from 'context/supremacyContext';
import React, {useContext, useEffect} from 'react';
import Logo from './../components/Logo';

const Index = () => {

  const { setCurrentSection } = useContext(SupremacyContext);

  useEffect(() => {
    setCurrentSection('Inicio');
  }, [])

  return (
    <div className="bg-backgContTem m-auto p-10 md:p-20 font-poppins">
      <Logo height={'h-36'} sizeText={'text-3xl'}/>
      <p className="mt-6 px-4 sm:px-20 text-center text-grayTem font-semibold text-sm md:text-lg">Bienvenidos a la Plataforma para gestionar proyectos de investigación, donde podrás hacer parte de algunos de nuestros proyectos y llevar un registro de tu proceso</p>
    </div>
  );
};

export default Index;
