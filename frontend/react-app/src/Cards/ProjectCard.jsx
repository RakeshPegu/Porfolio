import React from 'react';
import { Link } from 'react-router-dom';
import { Buttons } from '../Element.jsx/Atom';

function ProjectCard ({name, description, sitelink, src ,githublink}){
  return (
    <Link to={sitelink} className='  ml-3 flex items-center justify-center w-[98%] bg-cyan-50 ' >
      <div className=' bg-linear-to-r from-blue-500 to-indigo-700 hover:inset-ring-4 w-[100%] inset-ring-blue-200 rounded-2xl flex flex-row  min-h-70  '>
        
        <div className='flex-1 flex items-center justify-center'>
            <img  className='rounded-3xl h-45 object-contain' src={src} alt=''/>
        </div>
        <div className='flex-2 mt-5 flex flex-col gap-5'>
        <h1 className='text-4xl text-center'> {name}</h1>
        <p className='text-xl'>{description}</p>
        <div className='  flex justify-center'>
        <Buttons name='Visit here '/>
        </div>
        
        </div>
      
      </div>
      </Link>
  );
};

export default ProjectCard;