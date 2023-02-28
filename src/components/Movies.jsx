import React,{ Fragment,useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/videos.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import { Container } from './NavBar'
import NoImg from './NoImage.png'

function Movies() {
  const {toggle} = useContext(Container)
  const [moviesData,setMoviesData] = useState([])
  // const Api = 'https://api.themoviedb.org/3/movie/550?api_key=93fa04b3d14728f50673dbfa930c4d75/discover/movie'
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const MovieCall = async () => {
    const data = await axios.get(Api,{
      params:{
        api_key: '93fa04b3d14728f50673dbfa930c4d75',
      }
    })
    const results =data.data.results
    setMoviesData(results)
    //  console.log(data.data.results);
    
  }
useEffect(() => {
  MovieCall()
},[])
console.log(moviesData)
  return (
    <Fragment>
      <div></div>
      {moviesData.map((movie) => {
        return(
      <Fragment>
      <div id = 'container'>
       
        <AiFillPlayCircle color = 'green' fontSize={40} id="playIcon"/>
        <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt="image not fount 404"/>
        <h3>{movie.title}</h3>
      </div>
    </Fragment>
       )
      }
    )
  }
</Fragment>
    
  )
}

export default Movies