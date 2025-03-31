import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
   const handleAbout=()=>{
      
      const about = document.getElementById('about')
      if(about){
         about.scrollIntoView({behavior: "smooth"})
      }
   }
   const handleContact = ()=>{
      const contact = document.getElementById('contact')
      if(contact){
         contact.scrollIntoView({behavior:'smooth'})
      }
      
   }
   const handleHome = ()=>{
      const home = document.getElementById('home')
      if(home){
         home.scrollIntoView({behavior:'smooth'})
      }

   }
  return (
     <nav className='flex items-center fixed h-15 bg-black bg-clip-text  w-full xl md:text-xl '>
        <ul className=' flex flex-row gap-10 text-2xl font-bold text-amber-500 justify-around w-full font-serif'>
            <li ><Link onClick={handleHome}>Home</Link></li>
            <li><Link onClick={handleAbout}>About </Link></li>
            <li><Link onClick={handleContact}> Contact </Link></li>
        </ul>
     </nav>
  );
};

export default Navbar;