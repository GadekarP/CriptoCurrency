import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/> }/>
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
