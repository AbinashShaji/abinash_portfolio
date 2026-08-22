import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;