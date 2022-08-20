import React, {useState} from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {


  const [movies, setMovies] = useState([]);
  const dummyMovies = [];

  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        //data

        return res.json();
      })
      .then((data) => {
        console.log("REAL DATA", data.results);

        const transformedMovies= data.results.map(movie=>{
             return {
              id: movie.episode_id,
              title: movie.title,
              openingText: movie.opening_crawl,
              releaseDate:movie.release_date

             }
        })

        console.log(">>>>>>>>>", transformedMovies)
        setMovies(transformedMovies)
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
