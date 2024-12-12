import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallary from './pages/Gallary.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Team from './pages/Team.jsx'
import BlogDetail from './pages/BlogDetail.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='gallery' element={<Gallary/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='team' element={<Team/>} />
      <Route path="/blog/:id" element={<BlogDetail/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
