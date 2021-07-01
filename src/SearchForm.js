import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { isError, errorMsg, query, setQuery } = useGlobalContext()

  return (
    <form
      action=''
      className='search-form'
      onSubmit={(e) => e.preventDefault()}
    >
      <h2>search movies</h2>
      <input type='text' className='form-input' value={query} onChange={e=>setQuery(e.target.value)} />
      {
        isError && <div className="error">{errorMsg}</div>
      }
    </form>
  )
}

export default SearchForm
