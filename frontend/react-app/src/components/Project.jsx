import React from 'react';
import ProjectCard from '../Cards/ProjectCard'
function Project (){
  return (
    <div className='bg-gray-500 flex flex-col gap-7  pt-8 pb-30 mt-30 ' id='projects'>   
    <h1 className='text-5xl text-center justify-start mb-10  text-white'>Projects </h1>          
       <ProjectCard src='./code.jpg' description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ad dicta, vel, numquam laudantium laboriosam rem ex aspernatur, tenetur incidunt fuga sequi quidem quod illum beatae error debitis sed possimus."  name="Pioneer"/>
       <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time dhkdhid  dhdidh dkdhhkfdhk hidh h dhhdfihi hdihihd h dh h dhkhdkhkdkhkdhkhdkhkdhkhdkhkdhhdkhdkhdkhdkhdkhdkhdkhhh ihhd" name="Chit-Chat"/>
       <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time" name="Chit-Chat"/>
       <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time" name="Chit-Chat"/>
       <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time" name="Chit-Chat"/>
       <ProjectCard src='./code.jpg' description="This is chatting application , in this application i have used socket.io to make the application real-time" name="Chit-Chat"/>
      </div>
  );
};

export default Project;