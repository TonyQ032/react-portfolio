import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Project />
      <Footer />
    </React.StrictMode>
  )
}

export default App;
