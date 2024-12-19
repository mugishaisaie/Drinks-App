import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {About,Cocktail,Error,HomeLayout,Landing,Newsletter} from './pages'
import { loader as landingLoader } from './pages/Landing';
import { loader as SingleCocktailLoader } from './pages/Cocktail';
import SinglePageError from './pages/SinglePageError';
import { action as newsletterAction} from './pages/Newsletter';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';



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
     
      {path: 'cocktail/:id',                              
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader:SingleCocktailLoader,
      },
      {path: 'newsletter',                              
        element: <Newsletter />,
        action: newsletterAction,
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
