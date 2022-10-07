import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectPage from './components/ProjectPage';
import About from './components/About';

function App() {

  return (
    <React.StrictMode>
      <Header />
      <main>
        <About />
        <ProjectPage />
      </main>
      <Footer />
    </React.StrictMode>
  )
}

export default App;
