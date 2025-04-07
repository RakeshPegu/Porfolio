import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {

  return (
    <div className='overflow-y-auto'>
      <div className='fixed z-50'>
        <Navbar/>
      </div>
      <div >
        <Outlet/>
      </div>
      <div className='bg-[url(/coder2.jpg)] bg-center bg-fixed bg-no-repeat bg-cover h-[100vh]' ></div>
      <div >
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;