import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
    <section className="moviepage">
      <div className="container grid grid-4-col">
      {movie.map((currmovie) => {
        const {imdbID,Title,Poster}=currmovie;
        return (
          <NavLink  key={imdbID}>
            <div className="card">
              <div className="card-info">
                <h2>{Title}</h2>
                <img src={Poster} alt="imdbID"/>

              </div>
            </div>
          </NavLink>
        );
      })}
      </div>
      </section>
    </>
  );
};

export default Movies;
