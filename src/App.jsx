
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import HuffmanPage from "./components/HuffmanPage";
import NaivePage from "./components/NaiveSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/huffman" element={<HuffmanPage />} />
        <Route path="/naive" element={<NaivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
