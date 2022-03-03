import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <NavLink to = '/' className= "link ">HOME</NavLink>
    <NavLink to = '/student' className= "link " >STUDENT </NavLink>
    <NavLink to = '/contact' className= "link " >Contact us </NavLink>
    </nav>
  )
}

export default Navbar