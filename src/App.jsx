import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {About,Cocktail,Error,HomeLayout,Landing,Newsletter} from './pages'
import { loader as landingLoader } from './pages/Landing';
import SinglePageError from './pages/SinglePageError';



const router = createBrowserRouter([
  {path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {index: true,                              
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader:landingLoader,
      },
     
      {path: 'newsletter',                              
        element: <Newsletter />
      },
      {path: 'cocktail/:id',                              
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
