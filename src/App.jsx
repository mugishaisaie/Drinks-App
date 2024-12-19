import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {About,Cocktail,Error,HomeLayout,Landing,Newsletter} from './pages'
import { loader as landingLoader } from './pages/Landing';
import { loader as SingleCocktailLoader } from './pages/Cocktail';
import SinglePageError from './pages/SinglePageError';
import { action as newsletterAction} from './pages/Newsletter';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 *5,
    }
  }
})
const router = createBrowserRouter([
  {path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {index: true,                              
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader:landingLoader(queryClient),
      },
     
      {path: 'cocktail/:id',                              
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader:SingleCocktailLoader(queryClient),
      },
      {path: 'newsletter',                              
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />
      },
      {path: 'about',                              
        element: <About />
      },
      
    
    ]
  },
  
]);

function App() {
  

  return <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
}

export default App
