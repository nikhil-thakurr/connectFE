import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (

    <>
     <NavBar/>
    <Outlet/>
    <Footer/>
    </>
    
   
  )
}

export default Body