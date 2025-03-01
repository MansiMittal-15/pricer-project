import React from 'react' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Features from './components/Features'
import Contact from './components/Contact'
import Form from './components/Form'
import Login from './auth/login'
import Signup from './auth/Signup'

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
  {
    path: '/dataForm',
    element: <Form />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
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