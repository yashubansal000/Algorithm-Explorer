import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to Algorithm Explorer</h1>
      <p>Choose an algorithm to explore:</p>
      <Link to="/huffman">Visualize Huffman</Link><br />
      <Link to="/naive">Visualize Naive Search</Link>
    </div>
  );
}

export default HomePage;
