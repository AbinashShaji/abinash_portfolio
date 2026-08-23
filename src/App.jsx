/**
 * APP COMPONENT (App.jsx)
 * 
 * What this file is:
 * This is the "root" or top-level component of our entire application. 
 * 
 * What it's responsible for:
 * It acts as the master container that holds all the different sections of the website.
 * It imports every single section (Hero, About, Projects, etc.) and stacks them on top of each other.
 * 
 * Where it's used:
 * This file is imported by `main.jsx` and rendered directly into the HTML.
 */

// Import the core React library (required in older React versions, mostly optional in newer ones)
import React from 'react';

// Import all the individual building blocks (components) that make up our single-page website
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define the App component function
function App() {
  // Every React component must return JSX (HTML-like syntax)
  return (
    // The outermost wrapper div. 'relative' means any absolutely positioned elements inside it will position themselves relative to this div.
    <div className="relative">
      
      {/* 
        The Navigation bar stays at the top. 
        Because it's placed outside the <main> tag, it's structurally separate from the page content.
      */}
      <Navigation />
      
      {/* 
        The <main> tag is a semantic HTML element indicating the primary content of the page.
        Inside, we stack all of our section components in the exact order we want them to appear as the user scrolls down.
      */}
      <main>
        <Hero />       {/* 1. The intro/welcome section at the very top */}
        <About />      {/* 2. A brief bio/about me section */}
        <Services />   {/* 3. What services are offered */}
        <Projects />   {/* 4. Portfolio projects showcase */}
        <Skills />     {/* 5. Technical skills and tools */}
        <Journey />    {/* 6. Timeline of experience/education */}
        <Contact />    {/* 7. The contact form to send an email */}
      </main>
      
      {/* The Footer sits at the very bottom of the page, after all the main content */}
      <Footer />
      
    </div>
  );
}

// Export the App component so main.jsx can import and use it
export default App;