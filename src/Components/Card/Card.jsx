import React from 'react'

const Card = ({ movie }) => {
  return (
    <div className="col-md-4 p-4">
      <div className='card'>
        <img src={movie.Poster} alt={movie.Title} className='card-img-top' width='100' height='400'/>
        <div className="card-body">
          <h5>{movie.Title}</h5>
          <h5>{movie.Year}</h5>
          <p>{movie.Type}</p>
        </div>
      </div>
    </div>
  )
}

export default Card