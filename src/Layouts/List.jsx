import React, { useState, useEffect } from 'react'
import Card from '../Components/Card/Card'

const List = () => {
    const API='http://www.omdbapi.com/?i=tt3896198&apikey=6ebeb0ba'
    const [movie, setMovie] = useState({
        data: [],
        loading: true,
        searchTerm: "",
        error: "",
      });
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata= async () => {
        const res = await fetch(`${API}&s=batman`);
        const resJSON = await res.json();
    
        if (resJSON) {
          setMovie({
            data: resJSON.Search,
            loading: false,
            error: "",
          });
        }
      };
    return (
        <div className='row'>
            {movie.data.map((data) => {
                return (<Card movie={data} />)
            })}
        </div>
    )
}

export default List