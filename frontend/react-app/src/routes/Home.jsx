import React from 'react';
import Card from '../Cards/Card';
import About from '../components/About';
import Animate from '../components/Animate';
import { Buttons} from '../Element/Elements';
import Project from '../components/Project';
import HomeCom from '../components/HomeCom';
import BoxAnimation from '../components/BoxAnimation';


function Home (){
  return (
    <div className="bg-[url('/code.jpg')] bg-cover flex flex-col bg-fixed bg-center z-20">
    
       <Animate/>  
      <div className='animate-throw relative'>     
     <div className=" bg-gray-300 w-full relative  mb-150 flex flex-col gap-30">
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
    </div>
  );
};

export default Home;