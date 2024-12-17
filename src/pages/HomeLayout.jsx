import React from 'react';
import {  Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  return (
    <>
    
      <Navbar />
      <section className='page'>
      <Outlet />
      </section>
    </>
  )
}

export default HomeLayout;
