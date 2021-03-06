import { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ isError: false, errorMsg: '' })
  const [data, setData] = useState(null)

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data.Search || data)
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
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
    // eslint-disable-next-line
  }, [urlParams])

  return {
    isLoading,
    ...error,
    data,
  }
}

export default useFetch
