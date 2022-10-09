import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectPage from './components/ProjectPage';
import About from './components/About';
import { Contact } from './components/Contact';

function App() {

  return (
    <React.StrictMode>
      <Header />
      <main>
        <About />
        <ProjectPage />
        <Contact />
      </main>
      <Footer />
    </React.StrictMode>
  )
}

export default App;
