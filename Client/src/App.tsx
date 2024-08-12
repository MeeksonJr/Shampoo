import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShampooList from './components/ShampooList';
import ShampooDetail from './components/ShampooDetail';
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ShampooList />} />
            <Route path="/shampoo/:id" element={<ShampooDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
