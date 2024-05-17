import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieList(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App"> 
      <h1>
        <strong>Studio Ghibli List</strong>
      </h1>
      <ul id="movie-UlList">
        {movieList.map((movie) => (
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
        ))}
      </ul>
    </div>
  );
}

export default App;
