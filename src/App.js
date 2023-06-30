import './css/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFnd from './Pages/PageNotFnd';
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import Profile from './Pages/Profile';

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<PageNotFnd />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;