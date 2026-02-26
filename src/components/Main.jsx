import React from 'react'
import HeaderComponent from './Header';
import Card_product from './card_product';
import HelpComponent from './Help_us'
import FooterComponent from './Footer';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


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
// export default main;

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Главная</Link>
//         <Link to="/about">О нас</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }