import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark head-nav p-2'>
        <Link to={"/"} className='navbar-brand'>
            IGD
        </Link>
        <div className='navbar-nav me-auto mb-2 mb-lg-0'>
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
        </div>
        <div className='navbar-nav ml-auto d-flex'>
            <li className='nav-item'>
                <Link to={"/login"} className='nav-link'>
                    Login
                </Link>
            </li>
        </div>
    </nav>
  )
}

export default NavBar