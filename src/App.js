import { useEffect, useState } from "react";
import "./styles.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const Api_Url = "https://www.omdbapi.com?apikey=5889aff0";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
