import React from 'react'
import './Home.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home1 from './Home1'
import About from './About'
import FunCounter from './FunCounter'
import ResponsiveAppBar from './ResponsiveAppBar'
import Registration from './Registration'
import Login from './Login'
import Profile from './Profile'
import Logout from './Logout'
import FetchUsers from './FetchUsers'

const Home = () => {
  return (
    <div className='container'>
        <div className='header'>
        <ResponsiveAppBar> 
        <nav>
        <Link to='/' >Login</Link>
        <Link to='/home' >Home</Link>
        <Link to='/about'>Aout</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/registration'>Registration</Link>
        </nav>
        </ResponsiveAppBar>
        </div>
        <div className='lsb'>
        </div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/counter' element={<FunCounter/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/home' element={<Home1/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/fetchusers' element={<FetchUsers/>} />
         
          </Routes>
        </div>
        <div className='footer'>
        <p>&copy; 2025 Copyright@Dr.G.Veerraju</p>
        </div>
      
    </div>
  )
}

export default Home
