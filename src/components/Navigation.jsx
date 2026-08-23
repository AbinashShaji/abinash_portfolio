/**
 * NAVIGATION COMPONENT (Navigation.jsx)
 * 
 * What this file is:
 * This component creates the sticky navigation bar at the top of the screen.
 * 
 * What it's responsible for:
 * It provides links to all the different sections of the page. It also handles 
 * the mobile "hamburger" menu that opens and closes on smaller screens.
 * 
 * Where it's used:
 * Rendered inside `App.jsx`, placed outside the `<main>` tag so it stays on top.
 * 
 * Dependencies:
 * - 'framer-motion': Used to smoothly animate the mobile menu opening and the nav bar sliding in.
 * - 'lucide-react': Provides the Menu and X (close) icons for mobile.
 */

// Import React hooks for managing data that changes over time (state) and running side effects (effects)
import { useState, useEffect } from 'react';
// Import animation tools
import { motion, AnimatePresence } from 'framer-motion';
// Import the hamburger and close icons
import { Menu, X } from 'lucide-react';

// This is an array of all our navigation links. 
// Storing them in an array makes it easy to loop through and create the menu items without repeating code.
// The 'href' matches the 'id' of the sections in our page (e.g., #home jumps to id="home").
const links = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  // 'isOpen' tracks whether the mobile menu is currently open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);
  
  // 'scrolled' tracks whether the user has scrolled down the page more than 50 pixels.
  // We use this to change the background color of the navbar from transparent to solid.
  const [scrolled, setScrolled] = useState(false);

  // useEffect runs code after the component appears on the screen.
  // Here, we set up a "listener" that watches for the user scrolling the page.
  useEffect(() => {
    // This function checks the scroll position
    const handleScrollEvent = () => {
      // If we've scrolled past 50px, 'scrolled' becomes true. Otherwise, false.
      setScrolled(window.scrollY > 50);
    };
    
    // Tell the browser to run our function every time a scroll happens
    window.addEventListener('scroll', handleScrollEvent);
    
    // The "return" function is a cleanup step. It runs when the component is destroyed.
    // It removes the listener so we don't accidentally run it on other pages.
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []); // The empty array [] means "only run this setup once when the page loads"

  // This function runs when a user clicks a navigation link
  const handleScroll = (e, href) => {
    e.preventDefault(); // Stops the browser from instantly jumping to the link like a normal webpage
    setIsOpen(false);   // Closes the mobile menu if it was open
    
    // Find the section on the page that matches the link (e.g., id="about")
    const element = document.querySelector(href);
    if (element) {
      // Tell the browser to smoothly scroll down to that section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // The actual visual structure of the Navigation bar
  return (
    // <motion.nav> is a special HTML <nav> tag that Framer Motion can animate.
    // It slides down from the top (-100px) to its normal position (0) when the page loads.
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      // If 'scrolled' is true, we give it a red background with a blur effect. Otherwise, it's transparent.
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-red/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-end h-20 md:h-24">
          
          {/* DESKTOP NAVIGATION */}
          {/* 'hidden md:block' means this hides on small phones, but shows up on medium screens (md) and larger. */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {/* We loop through our 'links' array to generate each link button */}
              {links.map((link) => (
                <a
                  key={link.name} // React needs a unique 'key' for every item in a list
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)} // When clicked, run our smooth scroll function
                  className="text-cream hover:text-white transition-all duration-300 text-sm font-mono tracking-[0.15em] border-b border-transparent hover:border-white pb-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger Icon) */}
          {/* 'md:hidden' means this shows on small phones, but hides on medium screens and larger. */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} // Flips 'isOpen' from true to false, or false to true
              className="text-cream p-2 focus:outline-none"
            >
              {/* If 'isOpen' is true, show the X icon. Otherwise, show the Menu icon. */}
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION MENU (Dropdown) */}
      {/* AnimatePresence allows Framer Motion to animate the menu fading *out* when it closes */}
      <AnimatePresence>
        {/* 'isOpen &&' means "only render what comes next if isOpen is true" */}
        {isOpen && (
          <motion.div 
            // The menu starts invisible with 0 height, and animates to full visibility and height.
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-red border-t border-cream/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-6">
              {/* Loop through the links again for the mobile menu */}
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)} // Clicking a link will also close the menu (handled inside handleScroll)
                  className="text-cream hover:text-white transition-all duration-300 text-sm font-mono tracking-[0.15em] inline-block self-start border-b border-transparent hover:border-white pb-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
