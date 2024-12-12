import React from 'react' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])

const App = () => {
  return (
    <> 
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App