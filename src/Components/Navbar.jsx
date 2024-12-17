import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const styledBtn = styled.button `

background: red;
color: white;
font-size: 2rem;
padding: 1rem;
`

const Navbar = () => {
  return (
   <nav>
    <div className="nav-center">
        <span className='logo'>Drinks App</span>
        <div className="nav-links">
            <NavLink to='/' className='nav-links'>Home</NavLink>
            <NavLink to='/about' className='nav-links'>About</NavLink>
            <NavLink to='/newsletter' className='nav-links'>Newsletter</NavLink>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
