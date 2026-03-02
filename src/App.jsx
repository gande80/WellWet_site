import { useState } from 'react'
import MainComponent from './components/Main'
import CatalogComponent from './components/CatalogCom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import { CatalogCard } from './components/Catalog';

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>

<Route path="/" element={<CatalogComponent />} />
  <Route path="/product/:id" element={<MainComponent />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
