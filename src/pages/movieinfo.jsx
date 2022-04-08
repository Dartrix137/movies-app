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
                    <div className="d-flex flex-row bd-highlight mb-3 col">
                        <h1 className='text-white'>
                            {movie.data.Title}
                        </h1>
                        <img src={movie.data.Poster} alt={movie.data.Title} className='card-img-top' />
                    </div>
                    <div className="d-flex flex-row-reverse bd-highlight mb-3 col">
                        <div className="row">
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Movieinfo