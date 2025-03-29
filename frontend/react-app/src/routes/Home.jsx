import React from 'react';
import Card from '../Cards/Card';
import About from '../components/About';

import { Buttons} from '../Element.jsx/Atom';
import Project from '../components/Project';
import HomeCom from '../components/HomeCom';


function Home (){
  return (
    <div className="bg-[url('/code.jpg')]  bg-cover  bg-fixed bg-center z-20">
     <div className=" bg-gray-300 w-full relative top-95  mb-150 flex flex-col gap-30">
       <div>
         <HomeCom/>
       </div>
       <div className='bg-gray-600 flex justify-center'>
        <About/>      
       </div>
       <div>
        <Project/>
       </div>
    
    
    </div>
    </div>
  );
};

export default Home;