import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Recipes from './Component/Recipes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Aboutus from './Component/Aboutus'
import ViewRecipe from './Component/ViewRecipe'
import Login from './Component/Login'


function App() {


  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipess" element={<Recipes/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about us" element={<Aboutus/>}/>
        <Route path="recipess/view-recipe/:id" element={<ViewRecipe />} />
        <Route path="/login" element={<Login/>} />
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
