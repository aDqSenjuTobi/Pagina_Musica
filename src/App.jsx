import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="animated-text">
          <motion.span
            style={{ color: '#FF0000' }}
            whileHover={{ scale: 1.2, color: '#00FF00' }}
            transition={{ duration: 0.2 }}
          >
            Harmonic
          </motion.span>
          <motion.span
            style={{ color: '#FF0000' }}
            transition={{ duration: 0.2 }}
          >
            Haven
          </motion.span>
        </h1>
      </div>
    </div>
  );
}

export default App;

