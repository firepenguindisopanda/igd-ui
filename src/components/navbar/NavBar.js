import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link to={"/blogs"} className='navbar-brand'>
            IGD
        </Link>
        <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
                <Link to={"/blogs"} className='nav-link'>
                    Blogs
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={"/add"} className='nav-link'>
                    Add Blog
                </Link>
            </li>
        </div>
    </nav>
  )
}

export default NavBar