import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router' 
import Dashboard from './components/dashboard'
import Login from './components/Login'
import Signup from './components/signup'
import './App.css'


const router = createBrowserRouter([
    { 
      path: '/', component: (<Signup />) 
  },
    {
      path: '/login', component: (<Login />)
  },
    {
      path: '/dashboard', component: (<Dashboard />)
  }

])


function App() {
  
  return (
    <RouterProvider router = { router} />
  )
}

export default App;
