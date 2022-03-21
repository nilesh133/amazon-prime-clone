import React from 'react'
import Slider from "./Slider";
import MoviesSection from "./MoviesSection";
import ShowSection from "./ShowSection";
const Main = ({ results }) => {
  const { nowPlayingMovies, popularMovies, popularTvShows, topRatedMovies, topRatedShows, upComingMovies } = results;
  return (
    <main className='bg-[#0f171e] pb-16'>
      <Slider />
      <MoviesSection results={nowPlayingMovies} title="Now Playing" />
      <ShowSection results={popularTvShows} title="Popular Shows" />
      <MoviesSection results={topRatedMovies} title="Top Movies" />
      <ShowSection results={topRatedShows} title="Top Shows" />
      <MoviesSection results={upComingMovies} title="Upcoming Movies" />
    </main>
  )
}

export default Main