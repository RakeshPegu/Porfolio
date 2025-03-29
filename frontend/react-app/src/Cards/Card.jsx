
import  {memo} from 'react';
function Card ({src, name, title ,comment}){
  return (
      <div className='bg-blue-50 w-50 h-45 flex flex-col gap-5 rounded-2xl  cursor-pointer shadow-xl text-black'>
        <h1 className='text-center text-3xl mt-5'>{title}</h1>
         <div className=" flex justify-center mt-1 items-center">  
         <img className='h-18  text-amber-50'  src={src} alt={name}/>
         
                    
        </div>
        <h1 className='font-serif  mt-8 text-center'>{comment}</h1>
      </div>
  );
};

export default memo(Card);