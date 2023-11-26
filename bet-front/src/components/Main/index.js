// Main.js
import React from 'react';
import StdMenu from '../Util/StdMenu';
import StdCarousel from '../Util/StdCarousel';
import ImpCard from '../Util/ImpCard';

const Main = () => {
  return (
    <>
      <StdMenu />
      <ImpCard></ImpCard>
      <StdCarousel></StdCarousel>
      <StdCarousel></StdCarousel>
    </>
    
  );
};

export default Main;