// React Imports
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Bootstrap / SCSS
import './App.css';

// Import from Components
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import {Pizza, Wings}  from './components/menu';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" exact element = {<Homepage/>}/>
        <Route path='/pizza' element = {<Pizza/>}/>
        <Route path='/wings' element = {<Wings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
