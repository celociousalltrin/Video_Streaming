import React, { useEffect } from 'react';
import "./RowCard.css";
import{useState} from "react";
import CustomAPI from "../../Utils/axios";

const RowCard = ({title,fetchURL, isLarge = false}) => {
    const [card,setCard] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
      CustomAPI.get(fetchURL)
      .then((res)=>{
         setCard(res.data.results)
         return res;
      })
      .catch((err)=>{
        console.log(err)
      })
    },[fetchURL])

    const renderIteration = (()=>{
       return (card?.map((movie)=>
       ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
        <img 
        key={movie.id} className={`RowCard__posterSmall ${isLarge && "RowCard__posterLarge"}`}
        src={`${base_url}${
            isLarge ? movie.poster_path : movie.backdrop_path
        }`}
        alt=""
        />
       ))
       ) 
    })
console.log(card)
  return (
    <div className="RowCard">
   <h2>{title}</h2>

 <div className="RowCard__poster">
       {renderIteration()}
      </div>
 </div>
  )
}

export default RowCard