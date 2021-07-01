import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { isError, errorMsg, query, handleQuery } = useGlobalContext()

  
  return (
    <form action='' className='search-form'>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={handleQuery}
      />
      {isError && <div className='error'>{errorMsg}</div>}
    </form>
  )
}

export default SearchForm
