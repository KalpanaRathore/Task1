import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Content from './Content';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <h1>Google Authentication with Firebase</h1>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>} />
      <Route path="/content" element={<Content/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
