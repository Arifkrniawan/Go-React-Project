import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        let listMovies = [
        {
            id: 1,
            title : "Homelander",
            release_date: "02-11-1988",
            runtime: 116,
            m_rating: "R",
            description: "Some description"
        },
        {
            id: 2,
            title : "Spiderman 2",
            release_date: "03-17-1998",
            runtime: 120,
            m_rating: "R",
            description: "Some description"
        }];

        setMovies(listMovies)
    }, [])

  return (
      <div className="text-center">
        <h2>Movies</h2>
        <hr/>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Movies</th>
                    <th>Release Date</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((m)=>(
                    <tr key={m.id}>
                        <td>
                            <Link to={`/movie/${m.id}`}>
                                {m.title}
                            </Link>
                        </td>
                        <td>{m.release_date}</td>
                        <td>{m.m_rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>

      </div>
  );
};

export default Movies;
