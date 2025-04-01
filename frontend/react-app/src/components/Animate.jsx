import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Animate (){
   const [cursor, setCurson] = useState(true)
  return (
    <h1 className=' left-20  absolute top-50 w-[100%]  text-3xl font-serif text-blue-200 font-bold'>
         <Typewriter cursor={cursor} cursorBlinking={cursor} onLoopDone={()=> setCurson(false)} typeSpeed={100} words={['Hello World, WelCome to my Site']}/>
    </h1>
      

     
  );
};

export default Animate;