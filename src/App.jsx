import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/ui/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/ui/Contact";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
     path: "/contact",
      element: <Contact></Contact>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={browserRouter} />
     
  
      
    
    </>
  )
}

export default App
