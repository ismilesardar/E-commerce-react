import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
        <ul>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/login'>LOGIN</NavLink>
            </li>
            <li>
                <NavLink to='/register'>REGISTER</NavLink>
            </li>
        </ul>
    </>
  )
}

export default Menu