
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './Card'

export default function Movie() {

  let movies;
  
 movies = useSelector(state => state.Movie.movies)

  return (
   <div className='container mt-6 mx-auto' >
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ' >
    {
      movies === undefined ? null : 
      movies.map(mov => {
        return(<MovieCard movie={mov} key={mov.id} /> )
      })
    }
    </div>
   </div>
  )
}
 