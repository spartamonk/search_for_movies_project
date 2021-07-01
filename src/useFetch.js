import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ isError: false, errorMsg: '' })
  const [movies, setMovies] = useState([])
  const [movieInfo, setMovieInfo] = useState(null)
  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setMovies(data.Search)
        setMovieInfo(data)
        setError({ ...error, isError: false })
      } else {
        setError({ isError: true, errorMsg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(()=> {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  },[urlParams]);

  return {
    isLoading,
    ...error,
    movies,
    movieInfo
  }
}

export default useFetch
