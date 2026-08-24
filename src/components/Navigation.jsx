import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, LayoutGrid, Code, Map, Mail } from 'lucide-react';

// Navigation links with matching icons for the app-like UI
const links = [
  { name: 'HOME', href: '#home', icon: Home },
  { name: 'ABOUT', href: '#about', icon: User },
  { name: 'SERVICES', href: '#services', icon: Briefcase },
  { name: 'PROJECTS', href: '#projects', icon: LayoutGrid },
  { name: 'SKILLS', href: '#skills', icon: Code },
  { name: 'JOURNEY', href: '#journey', icon: Map },
  { name: 'CONTACT', href: '#contact', icon: Mail },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy logic: update active section based on scroll position
      const sections = links.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the element is crossing the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = `#${section}`;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScrollEvent);
    // Call once to set initial state
    handleScrollEvent();
    
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (e, href) => {
    // We do NOT use e.preventDefault() here!
    // We let the native HTML <a> tag handle the routing.
    // The smooth scrolling and the 96px offset for the fixed desktop header 
    // are now completely handled natively by CSS in index.css (scroll-smooth lg:scroll-pt-24)
    setActiveSection(href);
  };

  return (
    <>
      {/* 1. DESKTOP TOP NAVIGATION (hidden below 'lg' breakpoint) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-red/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex items-center justify-end h-24">
            <div className="flex items-center space-x-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`text-cream hover:text-white transition-all duration-300 text-sm font-mono tracking-[0.15em] border-b pb-1 interactable ${activeSection === link.href ? 'border-white text-white' : 'border-transparent hover:border-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 2. TABLET LEFT SIDEBAR NAVIGATION (Instagram Web Style) */}
      {/* Hidden on mobile (<md) and desktop (>=lg) */}
      <nav className="hidden md:flex lg:hidden fixed left-0 top-0 h-screen w-20 bg-[#111]/95 backdrop-blur-md border-r border-cream/10 z-50 flex-col items-center justify-center shadow-2xl">
        <div className="flex flex-col space-y-6 w-full px-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`w-full p-4 rounded-xl transition-all duration-300 flex items-center justify-center interactable group relative ${isActive ? 'bg-red text-white shadow-[0_0_15px_rgba(192,38,30,0.4)]' : 'text-cream/60 hover:text-white hover:bg-white/5'}`}
                aria-label={link.name}
                title={link.name}
              >
                <Icon size={24} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} strokeWidth={isActive ? 2.5 : 2} />
              </a>
            );
          })}
        </div>
      </nav>

      {/* 3. MOBILE BOTTOM NAVIGATION (Instagram Mobile App Style) */}
      {/* Hidden on tablet and above (>=md) */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#111]/95 backdrop-blur-md border-t border-cream/10 z-50 justify-around items-center px-2 pb-1 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`relative h-full flex-1 flex flex-col items-center justify-center interactable transition-colors duration-300 ${isActive ? 'text-white' : 'text-cream/50 hover:text-cream'}`}
              aria-label={link.name}
            >
              <Icon size={24} className={`transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
              {/* Active Indicator Dot */}
              <span className={`w-1 h-1 rounded-full bg-red transition-opacity duration-300 absolute bottom-3 ${isActive ? 'opacity-100 shadow-[0_0_10px_rgba(192,38,30,0.8)]' : 'opacity-0'}`}></span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
