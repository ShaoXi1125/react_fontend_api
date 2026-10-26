import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Settings } from './pages/Settings';
import { UserDetail } from './pages/UserDetail';
import  Products  from './pages/Products';
import AddProduct from './pages/AddProduct';

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
          <Route path="/Addproduct" element={ <AddProduct/> }/>
        </Routes>
      </div> 
    </div>
  );
}