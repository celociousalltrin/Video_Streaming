import React, { useEffect } from 'react';
import "./Banner.css";
import {useState} from "react";
import CUSTOMAPI from "../../Utils/axios";
import requests from '../../Utils/request';

const Banner = () => {
    const [movie,setMovie] = useState([])

useEffect(()=>{
    CUSTOMAPI.get(requests.fetchNetflixOriginals)
       .then((res)=>{
        setMovie(res.data.results[
            Math.floor(Math.random() * res.data.results.length-1)
        ])
       })
       .catch((err)=>{
        console.log(err)
       })
    },[])

    const truncate = ((string,n)=>{
        return string?.length > n ? string.substr(0,n) + "..." : string
    })

  return (
    <header
    className='banner'
    style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}
    >
   <div className="banner__content">
    <h1 className='banner__title'>
        {movie?.title || movie?.name || movie?.original_name}
    </h1>
    <div className='banner__button'>
        <button>Play</button>
        <button>My List</button>
    </div>
    <h1 className='banner__description'> {truncate(movie?.overview,150)}</h1>
   </div>
   <div className='banner__bottom'/>
    </header>
  )
}

export default Banner
