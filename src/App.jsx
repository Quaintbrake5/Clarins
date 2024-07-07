/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './components/Header'
import New from './components/New'
import Skincare from './components/Skincare'
import '../src/assets/Products Samples.webp'


function App() {

  return (
    <>
      <Header />
      <New image = '/src/assets/Image.webp'/>
      {/* <New pic = '/src/assets/Products Samples.webp'/> */}
      <Skincare/>
    </>
  )
}

export default App
