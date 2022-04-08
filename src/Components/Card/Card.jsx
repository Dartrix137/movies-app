import React from 'react'
import { NavLink } from 'react-router-dom'
const Card = ({ movie }) => {
  return (
    <div className="col-md-4 p-4">
      <div className='card'>
        <img src={movie.Poster} alt={movie.Title} className='card-img-top' width='100' height='400' />
        <div className="card-body">
          <NavLink to={`movieinfo/${movie.imdbID}`}>{movie.Title}</NavLink>
          <h5>{movie.Year}</h5>
          {movie.Ratings ?
            <h5>{movie.Ratings[0].Value}</h5>
            : "" 
          }
          <p>{movie.Type}</p>
        </div>
      </div>
    </div>
  )
}

export default Card