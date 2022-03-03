import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'
import './Components/style.css'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element ={<Home/> }></Route> 
    <Route path='/home' element ={<Home/> }></Route> 
    <Route path='student' element= { <Student/>}  />
    <Route path='contact' element= { <Contact/>}  />
  </Routes>
    
    </>
  )
}

export default App