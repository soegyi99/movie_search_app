import React, { useEffect } from 'react'
import { Card } from 'flowbite-react'
import { useParams } from 'react-router'
import { api, API_KEY } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedNovie, selectMovie } from '../redux/actions'

const MovieDetail = () => {

    const {movieId} = useParams()
    const dispatch = useDispatch()
    

    const fetchMovieDetails = () => {
      api.get(`/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => dispatch(selectMovie(res.data)) )
    }

    let data;
    data = useSelector(state => state.Movie.selectedMovie)
    console.log(data)

    useEffect(()=>{
      if(movieId)
      {
        fetchMovieDetails()
      }
      return () => {dispatch(removeSelectedNovie({}))}
      // eslint-disable-next-line
    },[])  

  return (
    <div className="container my-7 mx-auto ">
       {
        JSON.stringify(data) === '{}'?
        <div>Loading...</div>
        :
        <Card className='mx-4' imgSrc={`https://image.tmdb.org/t/p/w500${data.poster_path}`}>

          <div className='flex flex-col justify-between ' >

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>

          <div className='text-sm font-bold text-gray-700  ' >
            {data.vote_average}/10
            <br/>
            Release Date : {data.release_date}
            <br/>
            Genres : {data.genres.map((g,i) => <span>{g.name} {i === data.genres.length-1 ? null : ','}</span>)}
            <br/>
            Runtime : {data.runtime}min
            <br/>
            Revenue : {Number(data.revenue)/1000000}m
            <br/>
            Budget : {Number(data.budget)/1000000}m
          </div>
          </div>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {data.overview}
            </p>

        </Card>
   
       }
    </div>
  )
}

export default MovieDetail
