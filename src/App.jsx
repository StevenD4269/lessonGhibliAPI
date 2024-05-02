import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Homepage, FilmsPage, SingleFilmPage } from "./Pages/index.js";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
        
          <li><NavLink to="/films">Films</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/films" element={<FilmsPage />}></Route>
        <Route path="/films/:id">{ <SingleFilmPage/>}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
