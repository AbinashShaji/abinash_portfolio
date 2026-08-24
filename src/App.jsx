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

// Import the core React library and hooks
import React, { useState, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

// Import all the individual building blocks (components) that make up our single-page website
import Navigation from './components/Navigation';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Projects from './components/Projects';
import Skills from './components/skills';
import Journey from './components/journey';
import Contact from './components/contact';
import Footer from './components/footer';
import CustomCursor from './components/CustomCursor';

// Define the App component function
function App() {
  // State and refs to track scroll position and trigger resets
  const [resetKey, setResetKey] = useState(0);
  const { scrollY } = useScroll();
  const hasScrolledDown = useRef(false);

  // Listen to scroll events
  useMotionValueEvent(scrollY, "change", (latest) => {
    // If the user scrolls down past 300px, mark that they have left the home section
    if (latest > 300) {
      hasScrolledDown.current = true;
    } 
    // If they scroll back up to the very top (less than 20px) AND they had previously scrolled down
    else if (latest < 20 && hasScrolledDown.current) {
      // Increment the resetKey. This forces React to destroy and recreate all components
      // inside the wrapper, which resets all their "once: true" scroll animations!
      setResetKey(prev => prev + 1);
      hasScrolledDown.current = false;
    }
  });

  return (
    // The outermost wrapper applies padding to shift content seamlessly for the new tablet and mobile navigation bars
    <div className="relative pb-[72px] md:pb-0 md:pl-20 lg:pl-0 transition-all duration-300 overflow-x-hidden">
      
      <CustomCursor />

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
        <Hero />       {/* 1. The intro/welcome section at the very top (never unmounts) */}
        
        {/* Wrapping the lower sections in a div with our resetKey */}
        <div key={resetKey}>
          <About />      {/* 2. A brief bio/about me section */}
          <Services />   {/* 3. What services are offered */}
          <Projects />   {/* 4. Portfolio projects showcase */}
          <Skills />     {/* 5. Technical skills and tools */}
          <Journey />    {/* 6. Timeline of experience/education */}
          <Contact />    {/* 7. The contact form to send an email */}
        </div>
      </main>
      
      {/* The Footer sits at the very bottom of the page, after all the main content */}
      <Footer />
      
    </div>
  );
}

// Export the App component so main.jsx can import and use it
export default App;