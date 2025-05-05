import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import About from './pages/about';
import ImageCard from './components/ImageCard/ImageCard';
import Roadmap from './components/Roadmap/Roadmap'; // או הנתיב הרלוונטי


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
