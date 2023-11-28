import img from "./../img/movie_tickets.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Lets see what to watch</h2>
        <hr className="mb-3" />
        <Link to="/movies">
            <img src={img} alt="movie img"></img>
        </Link>
      </div>
    </>
  );
};

export default Home;
