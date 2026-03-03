import React from 'react'
import HeaderComponent from '../Header';
import CatalogComponent from './Catalog';
import FooterComponent from '../Footer';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const main = () => {
  return (
 <>
 
    <HeaderComponent/>

    <CatalogComponent/>

    <FooterComponent/>
 
  </>
  

  );
};

export default main;