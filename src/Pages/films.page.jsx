import { useEffect, useState } from "react";
import './films.page.css'
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

export function FilmsPage() {
  //1. Declare another piece of state, `searchDirector` and `setSearchDirector`, that will be destructured from the return of `useState("")`
  const [searchDirector, setSearchDirector] = useState("")
  const [movieList, setMovieList] = useState([]);

  // invoke`useEffect()`;
  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films") //  Inside the useEffect callback function, invoke the `fetch()`
      // Call the `.then(response)` method
      // Call the `.then(data)` method a second time
      // Call the `.catch(error)` method
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filmsByDirector = filterFilmsByDirector(movieList, searchDirector);
  const directors = getListOf(movieList, "director");


  return (
    <div className="App">
      <h1 color="red">
        <strong>Studio Ghibli List</strong>
      </h1>
      {/* 2. Add a `form` to the return statement beneath the existing `h1` */}
      <form>
        {/* 3. Add a `div` with class name `form-group` inside of the `form` */}
        <div className="form-group">
        {/* 4. Add a `label` and `select` inside of the `div.form-group` */}
          <label htmlFor="directorSelect">Filter Movies by Director</label>
          {/* 5. set the `select`'s `value` prop to the `searchDirector` state. set the `select`'s `onChange` prop to a function that calls `setSearchDirector` and updates `searchDirector` with the chosen `option` value */}
          <select
            name="selectDirector" id="directorSelect"
            value={searchDirector}
            onChange={(e) => {setSearchDirector(e.target.value)}}>
          {/* 6. add a single `option` to the `select` (for now) with the `value` set to `""` and text content displaying `"All" */}
            <option
              value="">All</option>
            {directors.map((director, index) => (
              <option key={index} value={director}>{director}</option>
            ))}
          </select>

        </div>
      </form>
      
      
      {/* /* 4. Inside of the ul, escape to Javascript - `{}`
      5. Map over the state
      variable
      6. Return an li element with the object's title
      7. Don't forget to give the li a key property */}
      <ul id="movie-UlList">
        {filmsByDirector.map(
          (
            movie //{escapes}
          ) => (
            <li key={movie.id}>
              <div className="movie-Left">
                <h2>{movie.title}</h2>
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie_right">
                <p>{movie.description}</p>
                <p>{movie.running_time} - m running time</p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default FilmsPage
