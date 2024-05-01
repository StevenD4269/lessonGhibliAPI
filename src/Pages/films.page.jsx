import { useEffect, useState } from "react";
import './films.page.css'
import filterFilmsByDirector from "../helpers/film.helpers";
import getListOf from "../helpers/film.helpers";

export function FilmsPage() {
  // 3. Declare a piece of state meant to hold the list of movie objects
  const [searchDirector, setSearchDirector] = useState("")

  // 8. invoke`useEffect()`;
  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films") // 9. Inside the useEffect callback function, invoke the `fetch()`
      // 10. Call the `.then(response)` method
      // 11. Call the `.then(data)` method a second time
      // 12. Call the `.catch(error)` method
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filmsByDirector = filterFilmsByDirector(films, searchDirector);
  const directors = getListOf(films, "director");


  return (
    <div className="App">
      {/* ## Layout the elements 
        1. Create an h1 with a title 
        2. Create a ul */}
      <h1 color="red">
        <strong>Studio Ghibli List</strong>
      </h1>
      
      <form>Form placeholder
        <div className="form-group">
          <label htmlFor="searchDirector"></label>
          <select name="selectDirector" value={searchDirector} onChange={(e) => setSearchDirector(e.target.value)}>
            <option value="">All</option>
            {directors.map((director, index) => (
              <option key={index} value={director}>Director</option>
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
