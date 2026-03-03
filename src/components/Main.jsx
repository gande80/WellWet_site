import React from 'react'
import HeaderComponent from './Header';
import Card_product from './product/card_product';
import HelpComponent from './product/Help_us'
import FooterComponent from './Footer';




const main = () => {
  return (
 <>
 
    <HeaderComponent/>

    <Card_product/>

    <HelpComponent/>

    <FooterComponent/>
    
  </>
  

  );
};

export default main;
