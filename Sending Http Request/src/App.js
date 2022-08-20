import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMoviesHandler() {
    setLoading(true)
    const res = await fetch("https://swapi.dev/api/films");

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
    setLoading(false)
    setMovies(transformedMovies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length>0 && <MoviesList movies={movies}/>}
        {!loading && movies.length===0 && <p>No movies found.</p> }
        {loading && <p>Loading.........</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
