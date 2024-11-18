import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'

const MovieList = ({genreId}) => {
    const [movieList, setMovieList]=useState([])
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5'>
        {movieList.map((item, index)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
  )
}

export default MovieList