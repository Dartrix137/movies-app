import React, { useState, useEffect } from 'react'
import Card from '../Components/Card/Card'
import { useParams } from 'react-router-dom'
const Movieinfo = () => {
    const { id } = useParams();
    const API = window.env.API
    const [movie, setMovie] = useState({
        data: [],
        loading: true,
        error: "",
    });
    const fetchMovieData = async () => {
        const response = await fetch(`${API}&i=${id}`);
        const data = await response.json();
        console.log(data)
        return setMovie({
            data: data,
            error: "",
            loading: false,
        });
    }
    useEffect(() => {
        fetchMovieData();
    }, []);
    return (
        <main className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className='container col'>
                        <div className='row d-flex flex-row bd-highlight mb-3 justify-content-center'>
                            <div className="bg-dark col-12 text-center">
                                <h3 className='text-white'>{movie.data.Title}</h3>
                            </div>
                            <div className='card col col-md-6 bg-dark'>
                                <img src={movie.data.Poster} alt={movie.data.Title} className='card-img-top' />
                            </div>
                            <div className="bg-dark col-12 text-center">
                                <p className='text-white'>Director: {movie.data.Director}</p>
                            </div>
                            <div className="bg-dark col-12 text-center">
                                <p className='text-white'>Writers: {movie.data.Writer}</p>
                            </div>
                            <div className="bg-dark col-12 text-center">
                                <p className='text-white'>Actors: {movie.data.Actors}</p>
                            </div>
                            <div className="bg-dark col-12 text-center">
                                <p className='text-white'>Genre: {movie.data.Genre}</p>
                            </div>
                            <div className="bg-dark col-12 text-center">
                                <p className='text-white'>Type: {movie.data.Type}</p>
                            </div>
                            <div className="bg-dark col-12 text-center">
                                <p className='text-white'>Released: {movie.data.Released}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row-reverse bd-highlight mb-3 col-12 col-lg-6 justify-content-center">
                        <div className="row">
                            {(movie.data.Ratings&& movie.data.Ratings[0]) ?
                                <div className="col-12">
                                    <h4 className='text-white'>Ratings:</h4>
                                </div>
                                :""}
                            {(movie.data.Ratings && movie.data.Ratings[0]) ?
                                <div className="col">
                                    <h5 className='text-white'>{`${movie.data.Ratings[0].Source}: ${movie.data.Ratings[0].Value}`}</h5>

                                </div>
                                : ""}
                            {movie.data.Ratings && movie.data.Ratings[1] ?
                                <div className="col">
                                    <h5 className='text-white'>{`${movie.data.Ratings[1].Source}: ${movie.data.Ratings[1].Value}`}</h5>

                                </div>
                                : ""}
                            {movie.data.Ratings && movie.data.Ratings[2] ?
                                <div className="col">
                                    <h5 className='text-white'>{`${movie.data.Ratings[2].Source}: ${movie.data.Ratings[2].Value}`}</h5>

                                </div>
                                : ""}
                            <div className="col-12">
                                <p className='text-white'>Plot: {movie.data.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Movieinfo