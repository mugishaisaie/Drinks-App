import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {About,Cocktail,Error,HomeLayout,Landing,Newsletter} from './pages'



const router = createBrowserRouter([
  {path: '/',
    element: <HomeLayout />,
    children:[
      {index: true,                              
        element: <Landing />
      },
     
      {path: 'newsletter',                              
        element: <Newsletter />
      },
      {path: 'cocktail',                              
        element: <Cocktail />
      },
      {path: 'about',                              
        element: <About />
      },
      
    
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
