import React,{ Fragment,useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/videos.css'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './NoImage.png'

function Anime() {
  const [AnimeData,setAnimeData] = useState([])
  // const Api = 'https://api.themoviedb.org/3/movie/550?api_key=93fa04b3d14728f50673dbfa930c4d75/discover/movie'
  const Api = "https://api.themoviedb.org/3/discover/movie"
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const AnimeCall = async () => {
    const data = await axios.get(Api,{
      params:{
        api_key: '93fa04b3d14728f50673dbfa930c4d75',
      }
    })
    const results =data.data.results
    setAnimeData(results)
    //  console.log(data.data.results);
    
  }
useEffect(() => {
  AnimeCall()
},[])
console.log(AnimeData)
  return (
    <Fragment>
      
      {AnimeData.map((Anime) => {
        return(
      <Fragment>
      <div id = 'container'>
       
        <AiFillPlayCircle color = 'green' fontSize={40} id="playIcon"/>
        <img src={Anime.poster_path ? `${Images}${Anime.poster_path}` : NoImg} alt="image not fount 404"/>
        <h3>{Anime.title}</h3>
      </div>
    </Fragment>
       )
      }
    )
  }
</Fragment>
    
  )
}

export default Anime