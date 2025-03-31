import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faS, fas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(fas, faS, faSquareFacebook, faLinkedin, faXTwitter, faSquareInstagram)
const Footer = () => {
  return (
    <div className='bg-gray-600 pb-5' id="contact">
    <div className="  flex flex-row pt-10 text-white">
     <div className=" flex-1 flex flex-col items-center ">
        <h2 className='text-2xl mb-5  '>INFORMATION</h2>
        <ul className='flex flex-col gap-3 text-xl'>
            <li > <Link to='#'>About me</Link></li>
            <li ><Link to='#'>Project </Link></li>
            <li><Link to="#"> Skill</Link></li>
            
        </ul>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h2 className='text-2xl mb-5'>CONTACT </h2>
        
         <div className="flex flex-col gap-3">
         <span><FontAwesomeIcon icon="fa-solid fa-phone" className='text-gray-950' /> Phone : +91 894040200</span>
         <span><FontAwesomeIcon icon="fa-solid fa-envelope" className='text-gray-950' /> E-mail: rpegu950@gmail.com</span>
         </div>
       
         <div className="flex flex-row gap-5 mt-3">
         <Link to='#'><FontAwesomeIcon icon="fa-brands fa-linkedin" className='text-blue-600 text-3xl' /></Link> 
         <Link to='#' ><FontAwesomeIcon icon="fa-brands fa-square-facebook" className='text-blue-950 text-3xl' /></Link>
         <Link to='#' ><FontAwesomeIcon icon="fa-brands fa-x-twitter" className='text-gray-950 text-3xl' /></Link>
         <Link to='#'><FontAwesomeIcon icon="fa-brands fa-square-instagram"  className='text-3xl bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl'/></Link>
         

         </div>
         
      </div>
     
    </div>
    <p className='text-center text-medium mt-10'> Copyright &#169; 2025 CodeCraft, All rights are reserved</p>
    </div>
  );
};

export default Footer;
