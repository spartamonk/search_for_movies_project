import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import useFetch from './useFetch'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  const {id}= useParams();
  const {isLoading, isError, errorMsg, data: movieInfo} = useFetch(`&i=${id}`);
 
  if(isLoading) {
    return (
      <div className="loading"></div>
    )
  }
  if(isError) {
    return (
      <div className="page-error">
        <h2>{errorMsg}</h2>
        <Link className="btn" to='/'>back to movies</Link>
      </div>
    )
  }
  const {Title: title, Year: year, Plot:plot, Poster:poster} = movieInfo
  return (
    <section className="single-movie">
      <img src={poster === 'N/A'? url: poster} alt={title} />
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
