import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const NavBar = ({ currentUser, showAdmin, showMod, logOut }) => {
    return (
        <nav className='navbar navbar-expand navbar-dark bg-dark head-nav p-2'>
            <Link to={"/"} className='navbar-brand'>
                IGD
            </Link>
            <div className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                    <Link to={"/home"} className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/blogs"} className='nav-link'>
                        Blogs
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to={"/addblog"} className='nav-link'>
                        Add Blog
                    </Link>
                </li>
                {
                    showAdmin && (
                        <li className='nav-item'>
                            <Link to={"/admin"} className='nav-link'>
                                Admin Board
                            </Link>
                        </li>
                    )
                }
                {
                    showMod && (
                        <li className='nav-item'>
                            <Link to={"/mod"} className='nav-link'>
                                Moderator Board
                            </Link>
                        </li>
                    )
                }
                {
                    currentUser && (
                        <li className='nav-item'>
                            <Link to={"/user"} className='nav-link'>
                                User
                            </Link>
                        </li>
                    )
                }
            </div>
            {
                currentUser ? (
                    <div className='navbar-nav ml-auto d-flex'>
                        <li className='nav-item'>
                            <Link to={"/profile"} className='nav-link'>
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a href='/login' className='nav-link' onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className='navbar-nav ml-auto d-flex'>
                        <li className='nav-item'>
                            <Link to={"/login"} className='nav-link'>
                                Login
                            </Link>
                        </li >
                        <li className='nav-item'>
                            <Link to={"/register"} className='nav-link'>
                                Sign Up
                            </Link>
                        </li >
                    </div >
                )
            }
        </nav >
    )
}

export default NavBar