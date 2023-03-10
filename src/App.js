import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import ButtonPage from "./pages/button";
import CardPage from "./pages/card"


function App() {
  return (
    // <div className="App">
      
    // </div>
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/button' element={<ButtonPage />} />
          <Route path='/card' element={<CardPage />} />
        </Routes>
      </main>

      <footer>footer here</footer>
    </Router>
  );
}

export default App;
