import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div >
      <div className='fixed z-50 ' >
       <Navbar/>
      </div>
      <div className='' >
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;