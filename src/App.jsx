
import React from "react";
import HuffmanPage from "./components/HuffmanPage";
import NaiveSearch from "./components/NaiveSearch";

function App() {
  return (
    <div className="app text-white bg-gray-900 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Algorithm Explorer</h1>
      <HuffmanPage />
      <NaiveSearch />
    </div>
  );
}

export default App;
