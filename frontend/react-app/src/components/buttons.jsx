import React from 'react';

function Buttons ({name, link}){
  return (
      <div className='bg-amber-400 h-15 hover:bg-blue-400 text-medium flex items-center justify-center w-40  rounded-3xl'>
        <button onClick={link}>{name}</button>
      </div>
  );
};

export default Buttons;