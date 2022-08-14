import React from 'react';
import RowCard from './RowCard';
import request from '../../Utils/request';

const Row = () => {
  return (
    <div>
    <RowCard
    title="NETFLIX ORIGINALS"
    fetchURL={request.fetchNetflixOriginals}
    isLarge = {true}
  />
  <RowCard title="Trending Now" fetchURL={request.fetchTrending} />
  <RowCard title="Top Rated" fetchURL={request.fetchTopRated} />
  <RowCard title="Action Movies" fetchURL={request.fetchActionMovies} />
  <RowCard title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
  <RowCard title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
  <RowCard title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
  <RowCard title="Documentaries" fetchURL={request.fetchDocumentaries} />
  </div>
  )
}

export default Row;