import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
        <ul style={{height: "50px"}} className="nav d-flex justify-content-center shadow-sm mb-2 bg-dark">
            <li className="nav-item">
                <NavLink to='/' className="nav-link text-light">HOME</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/login' className="nav-link text-light">LOGIN</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/register' className="nav-link text-light">REGISTER</NavLink>
            </li>
        </ul>
    </>
  )
}

export default Menu