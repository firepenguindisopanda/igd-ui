//import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import React from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AddBlog from './components/addblog/AddBlog';
import BlogList from './components/bloglist/BlogList';
import Blogs from './components/blogs/Blogs';
import LoginPage from './pages/login/LoginPage';
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
