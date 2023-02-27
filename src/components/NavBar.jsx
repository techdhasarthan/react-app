import React, { Fragment, useState } from 'react'
import{HiSearch} from 'react-icons/hi'
import { Routes,Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import Tv_Shows from './Tv_Shows'
import Trending from './Trends'
import Pricing from './Pricing'
import'../styles/NavBarStyle.css'
function NavBar() {
  const [toggle, setToggle] = useState(true)
  return (
   
    <Fragment>
        <nav className={toggle ? '' :'NavBarColor'}>
            <div className='nav_options'>
              <h1 id = {toggle ? '' :'heading'}>MovieInfo</h1>
                <NavLink to="/Movies" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Moviess' :'MoviesLight'}>Movies</span>
                </NavLink>
               
                <NavLink to="/Tv_Shows" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Movies' :'MoviesLight'}>Tv_Shows</span>
                </NavLink>
                <NavLink to="/Trending" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Movies' :'MoviesLight'}>Trending</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Movies' :'MoviesLight'}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search your fav movies'/>

            <HiSearch fontSize={21} color="black" id='search'/>
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' :'Color-switcher-moved'}> </div>
            </div>
            </div>
        </nav>
        <Routes>
          <Route path='Movies' element={<Movies /> }/>
          <Route path='Tv_Shows' element={<Tv_Shows /> }/>
          <Route path='Trending' element={<Trending /> }/>
          <Route path='Pricing' element={<Pricing /> }/>


        </Routes>
    </Fragment>
  )
}

export default NavBar