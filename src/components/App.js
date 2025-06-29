import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import "./../styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
