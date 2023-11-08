import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import User from './Component/User/User.jsx'
import Contact from './Component/Contact/Contact'
import Github from './Component/Github/Github'
import Followus from './Component/Contact/Followus/Followus'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path="/User" element={<User />} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='/Github' element={<Github />} />
        <Route path='/Followus' element={<Followus />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
