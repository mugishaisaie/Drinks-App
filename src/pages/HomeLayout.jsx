import React from 'react';
import {  Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation)
  const isPageLoading = navigation.state === 'loading';
  const value = "some value"
  return (
    <>
    
      <Navbar />
      <section className='page'>
     {isPageLoading? 
     <div className="loading"></div>:
      <Outlet context={{value}}/>}
      </section>
    </>
  )
}

export default HomeLayout;
