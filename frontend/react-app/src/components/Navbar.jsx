import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
  return (
     <nav className='flex items-center fixed h-15 bg-black bg-clip-text  w-full xl md:text-xl '>
        <ul className=' flex flex-row gap-10 text-2xl font-bold text-amber-500 justify-around w-full font-serif'>
            <li ><Link to="#">Home</Link></li>
            <li><Link to="#">About </Link></li>
            <li><Link to="#"> Contact </Link></li>
        </ul>
     </nav>
  );
};

export default Navbar;