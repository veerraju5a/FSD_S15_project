import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Flexdemo from './components/Flexdemo'
import Welcome from './components/Welcome'
import Helloclass from './components/Helloclass'
import Greetings from './components/Greetings'
import Counter from './components/Counter'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Home1 from './components/Home1'
import About from './components/About'
import DataFetch from './components/DataFetch'
import Register from './components/Register'
import Registration from './components/Registration'

function App() {
  

  return (
    <>
     {/* <Flexdemo/> */}
     {/* <Welcome name="veerraju" id="6280"/>
     <Welcome name="Raju" id="6270"/>
     <Welcome name="Ramesh" id="6290"/>
     <Helloclass name="veerraju" id="680"/>
     <Helloclass name="Rajesh" id="628"/> */}
     {/* <Greetings/> */}
     {/* <Counter/> */}
     
      <Home/>
      
      {/* <DataFetch/> */}
      {/* <Registration/> */}

    </>
  )
}

export default App
