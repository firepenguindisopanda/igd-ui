//import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AddBlog from './components/addblog/AddBlog';
import BlogList from './components/bloglist/BlogList';
import Blogs from './components/blogs/Blogs';
import LoginPage from './pages/login/LoginPage';
import Profile from './components/profile/Profile';
import BoardAdmin from './components/boardadmin/BoardAdmin';
import BoardModerator from './components/boardmoderator/BoardModerator';
import BoardUser from './components/boarduser/BoardUser';
import { logout } from './actions/auth';
import { clearMessage } from './actions/message';
import { Routes, Route, useLocation } from 'react-router-dom'
import RegisterPage from './pages/register/RegisterPage';
import AuthVerify from './common/auth-verify';
import eventBus from './common/EventBus';

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'));
    }else{
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    eventBus.on("logout", () => {
      logOut();
    });
    return () => {
      eventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  return (
    <div className='container-fluid'>
      <NavBar currentUser={currentUser} showMod={showModeratorBoard} showAdmin={showAdminBoard} logOut={logOut}/>
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<Blogs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/user" element={<BoardUser />} />
        </Routes>
      </div>
      <AuthVerify logOut={logOut}/>
    </div>
  );
}

export default App;
