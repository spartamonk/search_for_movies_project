import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import {url} from './Movies'


const SingleMovie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState({isError: false, errorMsg: ''})
  const {id} = useParams()
 const fetchMovie = async(url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data.Response === 'True') {
        setMovie(data)
        setError({...error, isError: false})
      } else {
        setError({isError: true, errorMsg: data.Error})
      }
      
     
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
 }
 useEffect(()=> {
   if(!isLoading) 
   return;
  fetchMovie(`${API_ENDPOINT}&i=${id}`)
 },[id])



  if(isLoading) {
    return (
      <div className="loading"></div>
    )
  }
   const { isError, errorMsg } = error
  if(isError) {
    return (
      <div className='page-error'>
        <h1>{errorMsg}</h1>
        <Link className='btn' to='/'>
          back to movies
        </Link>
      </div>
    )
  }
  const {Poster: poster, Title: title, Year: year, Plot: plot} = movie
  return (
    <section className="single-movie">
      <img src={poster === 'N/A'? url : poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link className="btn" to='/'>back to movies</Link>
      </div>
    </section>
  )
}

export default SingleMovie
