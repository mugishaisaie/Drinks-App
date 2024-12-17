import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../Wrappers/Navbar'


const styledBtn = styled.button `

background: red;
color: white;
font-size: 2rem;
padding: 1rem;
`

const Navbar = () => {
  return (
   <Wrapper>
    <div className="nav-center">
        <span className='logo'>Drinks App</span>
        <div className="nav-links">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/about' className='nav-link'>About</NavLink>
            <NavLink to='/newsletter' className='nav-link'>Newsletter</NavLink>
        </div>
    </div>
   </Wrapper>
  )
}

export default Navbar
