import React from 'react';
import { Buttons } from '../Element.jsx/Atom';

function HomeCom (){
  return (
    
    <div className='bg-gray-700 h-100 flex  pl-6 flex-col justify-center  text-white' id='about'>
      <h1 className='text-4xl'>Hi, I'm Rakesh</h1>
      <p className='text-2xl mt-3 '> Full Stack  Web Developer | Tech Enthusiast</p>
      <div className='text-lg mt-5'>
        <p>
         With 2 years of coding experience, I have built several projects and honed my skills in full-stack web
         development. I love turning ideas into reality through clean and efficient code.
        </p>
        <p>
        Currently, I'm diving deeper into advanced web development concepts, constantly pushing my boundaries to create seamless and scalable applications.
        </p>
      </div>
      <div className='mt-5 flex '>
        
        <Buttons name="View my work"/>
      </div>
      
    </div>
    
  );
};

export default HomeCom;