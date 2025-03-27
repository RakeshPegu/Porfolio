import React from 'react';
import Card from './Card';


function About (){
  return (
      <div className='flex flex-col bg-gray-200   w-[97%] p-10'>
        <h1 className='text-5xl text-center mb-20 mt-10 '> About me </h1>
        <div className='flex flex-col gap-4 text-xl font-serif'>
            <p>Hey there! I'm Rakesh, a self-taught web developer with nearly two years of experience in building and designing web applications. My journey into coding started with pure curiosity, and it quickly became a passion.</p>
            <p>I specialize in the MERN (MongoDB, Express.js, React, Node.js) stack, and I love crafting dynamic, scalable, and user-friendly applications. So far, I've worked on multiple projects that involve authentication, API integrations, real-time features, and database management.</p>
            <p>Currently, I'm exploring advanced full-stack development topics, always striving to improve my problem-solving skills and build better applications. I believe that learning never stops, and I'm always excited to take on new challenges</p>
        </div>
        <div className='mt-30'>
            <h1 className='text-3xl underline'>Tech Stack & Tools I Work With:</h1>
            <div className='flex flex-row gap-20  mt-10 '>
            <h2 className='text-2xl'>🔹 Frontend:</h2> 
            <Card title="React.js" src='./react.svg'/>
            <Card title='Tailwindcss' src="./vite.svg"/>
            <Card title="JavaScript" src='./javascript.svg'/>            
            
            
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl'>🔹Backend:</h2>
            <div className='flex flex-row gap-20 mt-10'>
                
                <Card title='Node.js' src="./nodedotjs.svg"/>
                <Card title="Express.js" src="./express.svg" />
                <Card  title='Socket.io' src="./socketdotio.svg"/>
                <Card  title='Flask' src="./flask.svg"/>
                <Card  title='Python' src='./python.svg'/>
                

            </div>
            </div>
            <div className='mt-20'>
            <h2 className='text-2xl'>🔹 Database: </h2>
            <div className='flex flex-row gap-20 mt-10'>
                
                <Card  title='PRISMA' src="./prisma.svg"/>
                <Card  title='MongoDB' src="./mongodb.svg"/>
                <Card  title='Mongoose' src=""/>
            </div>
            </div>
           <div className='mt-20'>
           <h2 className='text-2xl'>🔹Others:</h2>
           <div className='flex flex-row gap-20 mt-10'>               
                <Card  title="Git" src="./github.svg"/>
                <Card  title="JWT" src=""/>
                <Card  title="bcrypt" src=""/>
                <Card  title="REST APIs" src=""/>
                <Card title="Postman" src='./postman.svg'/>
            </div>
           </div>
            
        </div>
      </div>
  );
};

export default About;