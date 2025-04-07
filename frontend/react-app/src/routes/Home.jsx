import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card';
import About from '../components/About';
import Animate from '../components/Animate';
import { Buttons} from '../Element/Elements';
import Project from '../components/Project';
import HomeCom from '../components/HomeCom';




function Home (){
  const [scrollY,  setScrollY] = useState(0)
  const [isVisible, setVisible] = useState(false)
  useEffect(()=>{
    const handleScroll = ()=>{
      setScrollY(window.scrollY)

    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
    
  }, [])
  useEffect(() => {
    const element = document.getElementById('animation');
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        console.log('Visible:', entry.isIntersecting);
      },
      {
        threshold: 0.6, 
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, []);
  return (
    
    <div className="bg-[url(/dark.jpg)] bg-cover   flex flex-col bg-fixed bg-center " style={{backgroundPositionY: `-${scrollY * 0.3}px`}}>
     
    <div className='bg-transparent animate-scatter  relative invisible '>
      <div className='size-15 rounded-full absolute bottom-16 left-200 bg-green-500'> </div>
        <div className='bg-green-700 w-[100%] relative top-100  flex items-center '>
         
          <div className='size-10 rounded-full absolute left-230 top-15 bg-pink-800'></div>
        </div> 
        <div className='size-10 rounded-full absolute  left-10 bg-cyan-700'>   </div>
        <div className='size-28 rounded-full absolute left-240 bg-indigo-600'></div>
        < div className='size-26 rounded-full absolute top-25 bg-radial from-blue-400 via-cyan-300 to-gray-700'></div>
        <div className='size-30 rounded-full absolute left-230 top-30 bg-radial-[at_25%_45%] from-fuchsia-700 to-cyan-600 '></div>

        <div className='size-35 rounded-full absolute bottom-16 left-200 top-15 bg-lime-400'> </div>
        <div className='size-16 rounded-full absolute bottom-16 left-130 top-40 bg-blue-400'> </div>
      </div>
      
       <Animate/>  
   
      <div className='animate-throw relative'>     
     <div className=" bg-gray-300 w-full relative top-90  mb-150 flex flex-col gap-30">
       <div>
         <HomeCom/>
       </div>
       <div className='bg-[url(/comp.jpg)] bg-fixed bg-no-repeat bg-cover bg-center h-[100vh]' style={{backgroundPositionY: `-${scrollY * 0.2}px`}}>

       </div>
       <div className='bg-gray-600 flex justify-center'>
        <About/>      
       </div>
       <div className='bg-[url(/coder.jpg)] bg-center bg-clip-content bg-no-repeat bg-cover bg-fixed h-[98vh]' style={{backgroundPositionY: `-${scrollY * 0.1}px`}}> </div>
       <div className={'bg-black bg-fixed bg-no-repeat bg-cover relative bg-center h-[80vh]  '+ (isVisible? 'opacity-25': "opacity-100")} id='animation' 
      
       >
       <div className='size-96 rounded-full top-10 bg-amber-500 absolute left-100'></div>
        <div className='size-23 rounded-full top-80 bg-pink-230 absolute'></div>
        <div className='size-15 rounded-full absolute bottom-16 left-30 bg-green-500'> </div>
        <div className='bg-green-700 w-[100%] relative top-100  flex items-center '>
          <div className='size-12 rounded-full absolute w-20 left-10 bg-cyan-700'>   </div>
          <div className='size-28 rounded-full absolute left-178 bg-indigo-600'></div>
        </div> 
        < div className='size-50 rounded-full absolute top-20 bg-radial from-blue-400  via-cyan-300 to-gray-700'></div>
        <div className='size-30 rounded-full absolute left-20 top-30 bg-radial-[at_25%_45%] from-fuchsia-700 to-cyan-600 '></div>

        <div className='size-35 rounded-full absolute bottom-16 left-190 top-15 bg-lime-400'> </div>
        <div className='size-16 rounded-full absolute bottom-16 left-168 top-40 bg-red-500'> </div>

       

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