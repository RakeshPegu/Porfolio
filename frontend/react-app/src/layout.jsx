import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div>
      <div className='fixed z-50'>
        <Navbar/>
      </div>
      <div  >
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;