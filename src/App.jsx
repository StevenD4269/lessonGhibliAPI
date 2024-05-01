import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Homepage, FilmsPage } from "./Pages/index.js";


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
