import React from 'react'
import { useGlobalContext } from './context'

const Error = () => {
 const {errorMsg} = useGlobalContext()
 return (
 <div className='page-error'>
  <h2>{errorMsg}</h2>
 </div>
 )
}

export default Error
