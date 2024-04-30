import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Homepage, FilmsPage } from "./Pages/index.js";
import './App.css'


function App() {
  return (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        
        <li>
          <link to="/films">Films</link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/films" element={<FilmsPage/>}></Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App;
