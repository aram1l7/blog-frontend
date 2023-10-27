import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
