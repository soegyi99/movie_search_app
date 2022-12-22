import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'


export default function MovieCard({movie}) {
 
  return (
    <div className="max-w-sm">
  <Link to={`/movies/${movie.id}`} >
  <Card imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
   <div className='flex flex-col justify-between ' >
   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {movie.title}
    </h5>
    <div className='text-sm font-bold text-gray-700  ' >
      {movie.vote_average}/10
    </div>
   </div>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {movie.overview.slice(0,200)}
    </p>
  </Card>
  </Link>
</div>
  )
}
