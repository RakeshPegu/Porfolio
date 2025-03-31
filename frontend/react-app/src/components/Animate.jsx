import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Animate (){
   const [cursor, setCurson] = useState(true)
  return (
    <h1 className='text-center absolute top-18 w-[100%] text-5xl font-serif text-white font-bold'>
         <Typewriter cursor={cursor} cursorBlinking={cursor} onLoopDone={()=> setCurson(false)} typeSpeed={100} words={['Hello World, WelCome to my Site']}/>
    </h1>
      

     
  );
};

export default Animate;