import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Background from './Background'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-stone-300'>
      <Nav></Nav>
      <Background></Background>
      <Footer></Footer>
    </div>
  )
}

export default Home
