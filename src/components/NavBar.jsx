import React, { Fragment, useState } from 'react'
import{HiSearch} from 'react-icons/hi'
import { Routes,Route, NavLink } from 'react-router-dom'
import Anime from './Anime'
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
              <h1 id = {toggle ? '' :'heading'}> Akastsuki</h1>
                <NavLink to="/Anime" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Animes' :'AnimeLight'}>Anime</span>
                </NavLink>
               
                <NavLink to="/Tv_Shows" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Anime' :'AnimeLight'}>Tv_Shows</span>
                </NavLink>
                <NavLink to="/Trending" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Anime' :'AnimeLight'}>Trending</span>
                </NavLink>
                <NavLink to="/Pricing" style={({isActive}) => {return {color:isActive ? "#fff" : '#0ed6e8'}}}>
                <span id = {toggle ? 'Anime' :'AnimeLight'}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
            <input type="text" placeholder='Search your fav Anime'/>

            <HiSearch fontSize={21} color="black" id='search'/>
            <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' :'Color-switcher-moved'}> </div>
            </div>
            </div>
        </nav>
        <Routes>
          <Route path='Anime' element={<Anime /> }/>
          <Route path='Tv_Shows' element={<Tv_Shows /> }/>
          <Route path='Trending' element={<Trending /> }/>
          <Route path='Pricing' element={<Pricing /> }/>


        </Routes>
    </Fragment>
  )
}

export default NavBar