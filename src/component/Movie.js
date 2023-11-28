import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovies] = useState({})
    let { id } = useParams

    useEffect(()=>{
        let movie = {
            id: 1,
            title : "Homelander",
            release_date: "02-11-1988",
            runtime: 116,
            m_rating: "R",
            description: "Some description"
        };
        setMovies(movie)
    }, [id])

    return (
        <div className="text-center">
          <h2>Movie: {movie.title}</h2>
          <small><em>{movie.release_date}, {movie.runtime} minutes, rating: {movie.m_rating}</em></small>
          <hr/>
          <p>{movie.description}</p>
        </div>
    );
  };
  
  export default Movie;
  