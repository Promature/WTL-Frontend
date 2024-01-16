import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import SuccessStory from './routes/SuccessStory.jsx'
import Signup from './routes/Signup.jsx'
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/success-stories',
    element:<SuccessStory/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
