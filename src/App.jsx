import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {About,Cocktail,Error,HomeLayout,Landing,Newsletter} from './pages'



const router = createBrowserRouter([
  {path: '/',
    element: <HomeLayout />,
    children:[
      {path: '/about',                              
        element: <About />
      },
      {path: '/about',                              
        element: <About />
      },
      {path: '/cocktail',                              
        element: <Cocktail />
      },
      {path: '/landing',                              
        element: <Landing />
      },
      {path: '/about',                              
        element: <About />
      },
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
