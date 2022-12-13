//import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import React from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AddBlog from './components/addblog/AddBlog';
import BlogList from './components/bloglist/BlogList';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
