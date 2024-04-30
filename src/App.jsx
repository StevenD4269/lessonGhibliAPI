import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/home.page";
import FilmsPage from "./Pages/films.page";



function App() {
  return
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
        <Route path="/"></Route>
        <Route path="/films"></Route>
      </Routes>
    </BrowserRouter>
}

export default App;
