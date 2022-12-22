import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import {api,API_KEY} from '../api/api'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/actions'


export default function Header() {

  const [term,setTerm] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(term !== ''){
      api.get(`/search/movie?api_key=${API_KEY}&query=${term}`)
      .then(res => dispatch(fetchMovies(res.data.results)) )
    }
  }
  

  return (

   <div  className='flex justify-between items-center ' >

    <span className="sm:text-3xl text-red-900 lg:text-4xl font-bold ml-3">
        MOVIE
    </span>
   
   <form onSubmit={handleSubmit} className='flex justify-center items-center gap-2 mt-2 mr-2' >

    <input 
      className=' w-44 py-1 px-4 bg-gray-100 rounded-md sm:w-44 lg:w-96 '
      placeholder='Enter movie name'
      value={term}
      onChange={(e) => setTerm(e.target.value)}
     /> 


    <Button color='failure' size='xs' className='font-bold' type='submit' >
      Search
    </Button>

   </form>

  
   </div>
  )
}

