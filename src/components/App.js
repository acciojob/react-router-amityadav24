import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div id="main">
        {/* Do not remove the main div */}
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to my website!</h1>} />
          <Route path="/about" element={<h1>This is a sample React Router program.</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
