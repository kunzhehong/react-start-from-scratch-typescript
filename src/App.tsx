import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { NavMenu } from './components/NavMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <div className='content'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
      </div>
    </div>
  );
}

export default App;
