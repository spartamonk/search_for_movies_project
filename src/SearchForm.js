import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const { isError, errorMsg } = error

  return (
    <form action='' className='search-form' onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isError && <div className='error'>{errorMsg}</div>}
    </form>
  )
}

export default SearchForm
