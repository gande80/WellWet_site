import { useState } from 'react'
import MainComponent from './components/Main'
import CatalogComponent from './components/catalog/CatalogCom';
import AuthComponent from './components/auth/Auth';
import AdminComponent from './components/admin/Admin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'


function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>

<Route path="/" element={<CatalogComponent />} />
  <Route path="/product/:id" element={<MainComponent />} />
  <Route path='/auth' element={<AuthComponent />}/>
  <Route path='/admin' element={<AdminComponent />}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
