import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import SuccessStory from './routes/SuccessStory.jsx'
import FoundPet from './routes/FoundPet.jsx'
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
    path:'/success-stories',
    element:<SuccessStory/>
  },
  {
    path:'/found-pet',
    element:<FoundPet/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
