import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setLoading(true);
    setError(null);
    try {
      // use this to show error
      // const res = await fetch("https://swapi.dev/api/film");
      const res = await fetch("https://swapi.dev/api/films");

      console.log(res);
      if (res.ok === false) {
        throw new Error("Not able to fetch");
      }
      setLoading(false);
      const data = await res.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });

      console.log(">>>>>>>>>", transformedMovies);
      setMovies(transformedMovies);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && !error && <p>No movies found.</p>}
        {loading && <p>Loading.........</p>}
        {!loading && error && <p>We got some error.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
