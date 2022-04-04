import React, { Fragment, useState } from 'react'
import Card from '../Components/Card/Card'

const List = () => {
  const API = window.env.API
  const [movie, setMovie] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    error: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (movie.searchTerm === "") {
      return setMovie({ ...movie, error: "Please write a valid text" });
    }

    const response = await fetch(`${API}&s=${movie.searchTerm}`);
    const data = await response.json();
    console.log(data)
    if (!data.Search) {
      return setMovie({ ...movie, error: "There are no results." });
    }

    return setMovie({
      data: data.Search,
      searchTerm: "",
      error: "",
      loading:false,
    });
  };
  
  return (
    
    <Fragment>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text"
              className='form-control'
              placeholder='Search'
              onChange={(e) => setMovie({ searchTerm: e.target.value })}
              value={movie.searchTerm}
              autoFocus />
          </form>
          <p className='text-white'>{movie.error ? movie.error : ""}</p>
        </div>
      </div>
      <div className='row pt-2'>
        {movie.data ? movie.data.map((data, i) => {
          return (<Card movie={data} key={i} />)
        }) : ""}
      </div>
    </Fragment>
  )
}

export default List