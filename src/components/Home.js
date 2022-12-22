import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { api, API_KEY } from '../api/api'
import {fetchMovies} from '../redux/actions/index'
import Movie from './Movie'

export default function Home() {

  const dispatch = useDispatch()

  const getMovies = () => {
    api.get(`/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    .then(res => dispatch(fetchMovies(res.data.results)))
  }

    
  useEffect(() => {
    getMovies()
  },[])

  return (
    <div>
      <Movie />
    </div>
  )
}
