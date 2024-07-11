/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Header from './components/Header'
import New from './components/New'
import Skincare from './components/Skincare'
import Beauty from './components/Beauty'
import Services from './components/Services'
// import '../src/assets/Products Samples.webp'


function App() {

  return (
    <>
      <Header />
      <New image = 'https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw953e1a12/Homepage_CBA/Aspot/PRODUCT%20LAUNCHES/2024_BODY_FIT_ACTIVE/CBA_HP_Aspot-Desktop_BODY-FIT_2024_StillLife.jpg_master.jpg'/>
      {/* <New pic = '/src/assets/Products Samples.webp'/> */}
      <Skincare/>
      <Beauty/>
      <Services/>
    </>
  )
}

export default App
