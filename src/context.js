import React, { useReducer, useContext } from 'react'
import useFetch from './useFetch'
import { reducer } from './reducer'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()
const initialState = {
  query: 'mr bean'
}
const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);
const {isError, errorMsg, isLoading, data: movies} = useFetch(`&s=${state.query}`)
 const handleQuery = (e) => {
   dispatch({ type: 'SET_QUERY', payload: e.target.value })
 }

  return (
    <AppContext.Provider
      value={{ ...state, isError, errorMsg, isLoading, movies, handleQuery }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
