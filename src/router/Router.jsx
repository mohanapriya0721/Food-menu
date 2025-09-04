import React from 'react'
import Home from '../Component/Home'
import { Routes, Route } from "react-router-dom"
import Recipes from '../Component/Recipes'
import Blog from '../Component/Blog'
import Contact from '../Component/Contact'
import Aboutus from '../Component/Aboutus'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe" element={<Recipes/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about us" element={<Aboutus/>}/>
    </Routes>
  )
}

export default Router
