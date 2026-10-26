import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Settings } from './pages/Settings';
import { UserDetail } from './pages/UserDetail';
import  Products  from './pages/Products';

export default function App(){
  return(
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/settings" element={ <Settings/> }/>
          <Route path="/user/:id" element={ <UserDetail/> }/>
          <Route path="/products" element={ <Products/> }/>
        </Routes>
      </div> 
    </div>
  );
}