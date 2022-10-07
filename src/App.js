import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <About />
        <Project />
      </main>
      <Footer />
    </React.StrictMode>
  )
}

export default App;
