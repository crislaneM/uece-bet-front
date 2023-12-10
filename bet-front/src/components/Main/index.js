// Main.js
import React from 'react';

import ImpCard from '../Util/ImpCard';
import StdCarousel from '../Util/StdCarousel';
import StdMenu from '../Util/StdMenu';

const Main = () => {
  return (
    <>
      <StdMenu />
      <ImpCard></ImpCard>
      <StdCarousel></StdCarousel>
    </>
    
  );
};

export default Main;