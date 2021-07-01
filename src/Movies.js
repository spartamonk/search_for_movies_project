import React, {useEffect} from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {movies, isError, errorMsg, isLoading} = useGlobalContext()
    if(isLoading){
      return <div className="loading"></div>
    }
    return (
      <section className="movies">
        {
          movies.map(movie=> {
            const {Title: title, Year:year, imdbID:id,Poster:poster  } = movie
            return (
              <Link key={id} className='movie' to={`/movies/${id}`}>
                <article>
                  <img src={poster === 'N/A'? url: poster} alt={title} />
                  <div className="movie-info">
                    <h4 className="title">{title}</h4>
                    <p>{year}</p>
                  </div>
                </article>
            </Link>
            )
          })
        }
      </section>
    )
}

export default Movies
