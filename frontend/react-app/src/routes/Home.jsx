import React from 'react';
import Card from '../components/Card';
import Buttons from '../components/buttons';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';


function Home (){
  return (
    <div className="bg-[url('/code.jpg')] h-(--h-x-screen) bg-cover  bg-fixed bg-center z-20">
       <div className=" bg-transparent h-[(--h-x-screen)] w-full relative top-95 flex flex-col gap-30">
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
            <Buttons  name='View my work'/>
          </div>
          
        </div>
     
       <div className='bg-gray-600 flex justify-center'>
        <About/>

       </div>
       
       <div className='bg-gray-700 flex flex-col gap-7  pt-8 mt-30 ' >   
        <h1 className='text-5xl text-center justify-start mb-10  text-white'>Projects </h1>          
          <ProjectCard src='./code.jpg' description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ad dicta, vel, numquam laudantium laboriosam rem ex aspernatur, tenetur incidunt fuga sequi quidem quod illum beatae error debitis sed possimus."  name="Pioneer"/>
          <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time dhkdhid  dhdidh dkdhhkfdhk hidh h dhhdfihi hdihihd h dh h dhkhdkhkdkhkdhkhdkhkdhkhdkhkdhhdkhdkhdkhdkhdkhdkhdkhhh ihhd" name="Chit-Chat"/>
          <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time" name="Chit-Chat"/>
          <ProjectCard src='./code.jpg' description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ad dicta, vel, numquam laudantium laboriosam rem ex aspernatur, tenetur incidunt fuga sequi quidem quod illum beatae error debitis sed possimus."  name="Pioneer"/>
         </div>
    </div>
    </div>
  );
};

export default Home;