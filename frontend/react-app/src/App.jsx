import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Home from './routes/Home';
const route = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])
function App (){
  return (
   
     <RouterProvider router={route}/>
  
    
     
  );
};

export default App;