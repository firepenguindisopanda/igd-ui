//import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import React from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <Home />

      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
