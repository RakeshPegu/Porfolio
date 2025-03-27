import React from 'react';
import Card from '../components/Card';
import Buttons from '../components/buttons';
import About from '../components/About';


function Home (){
  return (
    <div className="bg-[url('/code.jpg')] h-(--h-x-screen) bg-cover  bg-fixed bg-center z-20">
       <div className=" bg-transparent h-[(--h-x-screen)] w-full relative top-50  flex flex-col gap-30">
        <div className='bg-gray-700 h-100 flex  pl-6 flex-col justify-center  text-white' id='about'>
          <h1 className='text-4xl'>Hi, I'm Rakesh</h1>
          <p className='text-2xl mt-3 '> Self-Taught Developer | MERN Stack Enthusiast</p>
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
            <Buttons  name='View my work'/>
          </div>
          
        </div>
     
       <div className='bg-gray-600 flex justify-center'>
        <About/>

       </div>
       <div className='bg-fuchsia-600' >
        <p>Skill section</p>
        <p>✅ Display your technical stack (frontend, backend, databases, tools) using icons or a grid layout.</p>
       </div>
       <div className='bg-green-500' >
        <h1>Projects</h1>
        <p>
        Project name & description

        Tech stack used

       Live demo & GitHub link

       Screenshots or GIFs
        </p>
       </div>
    </div>
    </div>
  );
};

export default Home;