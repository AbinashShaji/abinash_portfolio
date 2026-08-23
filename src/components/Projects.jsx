/**
 * PROJECTS COMPONENT (Projects.jsx)
 * 
 * What this file is:
 * This component showcases the portfolio's main work/projects.
 * 
 * What it's responsible for:
 * It loops through a list of projects and renders a visual card for each one,
 * containing the project title, description, tech stack, and a hover-revealed image.
 * 
 * Where it's used:
 * Rendered in `App.jsx`, immediately below the Services section.
 */

import { useRef, useState } from 'react';
import TypewriterLoop from './ui/typewriter-loop';
import { motion } from 'framer-motion';

// Array containing all project data. This keeps the JSX code below clean and easy to update.
const projects = [
  {
    num: "01",
    title: "Finzave",
    tag: "Financial Dashboard",
    description: "Finzave is a personal finance and financial decision-support system designed to help users understand their financial behaviour, manage income and expenses, analyze spending patterns, track financial goals, and make better financial decisions.",
    stack: "Flask, React, PostgreSQL/SQLite, Pandas, Chart.js",
    link: "#",
    image: "/images/project/finzave.webp"
  },
  {
    num: "02",
    title: "SmartVest",
    tag: "Investment Decision Support",
    description: "SmartVest is a financial decision-support system focused on analyzing a user's financial situation and providing useful financial insights and recommendations.",
    stack: "Python, Flask, SQLite, Pandas, Matplotlib",
    link: "https://smartvest.pythonanywhere.com",
    image: "/images/project/smartvest_1.webp"
  },
  {
    num: "03",
    title: "Triads Future",
    tag: "Business Consulting Website",
    description: "Triads Future is a premium business website being developed for a technology consulting and growth-oriented company.",
    stack: "Next.js, TypeScript, Tailwind, Framer Motion",
    link: "#",
    image: "/images/project/traids future1.webp"
  }
];

// NOTE: This ImageMagnifier component is an unused piece of code in the current layout.
// It looks like it was designed to let a user hover over an image to zoom in, 
// but it is currently not being rendered anywhere inside the main Projects component below.
const ImageMagnifier = ({ src, alt }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden w-full h-48 md:h-64 bg-black/5 cursor-crosshair mb-6 border border-black/10"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-100 ease-linear"
        style={{
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          transformOrigin: `${position.x} ${position.y}`
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/800x600/222/EFE6DA?text=${alt.replace(/\s+/g, '+')}`;
        }}
      />
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="bg-cream paper-texture text-black py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/10">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            {/* TypewriterLoop for looping reveal/hide animation on the heading */}
            <TypewriterLoop 
              LeadText="SELECTED"
              morphingText={["PROJECTS"]}
              transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              className="font-display text-5xl md:text-6xl uppercase tracking-tighter flex-wrap md:flex-nowrap items-baseline text-black"
              LeadTextClassName="mr-2"
            />
          </div>
          <a href="https://github.com/AbinashShaji" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest hover:text-red transition-colors group text-black uppercase pb-1">
            VIEW ALL PROJECTS <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </motion.div>

        <div className="relative">
          {/* Decorative solid red square tucked behind the final project card on large screens */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-red hidden xl:block z-0"></div>
          
          {/* CSS Grid for the project cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            
            {/* Loop through the projects array */}
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation using the array index
                className="bg-[#111111] text-white flex flex-row group h-[480px] hover:-translate-y-2 transition-transform duration-300"
              >
                
                {/* LEFT COLUMN OF THE CARD: Displays the large number and the hover image */}
                <div className="w-[35%] flex flex-col border-r border-white/5 bg-black">
                  
                  {/* The big project number (01, 02, etc.) */}
                  <div className="bg-red text-white font-display text-4xl flex items-center justify-center aspect-square shrink-0">
                    {project.num}
                  </div>
                  
                  {/* The image block */}
                  <div className="flex-grow relative overflow-hidden">
                     {/* This red overlay fades out when you hover over the card ('group-hover:opacity-0') */}
                     <div className="absolute inset-0 bg-red mix-blend-multiply opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                     
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       // The image starts out grayscale and dim, but turns fully colored when hovered
                       className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                       
                       // A clever fallback: if the real image URL fails to load, it generates a placeholder image on the fly!
                       onError={(e) => {
                         e.target.onerror = null;
                         e.target.src = `https://placehold.co/400x800/222/EFE6DA?text=${project.title.replace(/\s+/g, '+')}`;
                       }}
                     />
                  </div>
                </div>

                {/* RIGHT COLUMN OF THE CARD: Displays the text details */}
                <div className="w-[65%] flex flex-col p-6 lg:p-8">
                  
                  {/* Title and Tag */}
                  <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-tight mb-1 text-white leading-none">
                    {project.title}
                  </h3>
                  <div className="font-mono text-[10px] tracking-widest text-cream/50 mb-6 uppercase shrink-0">
                    {project.tag}
                  </div>
                  
                  {/* Description text */}
                  <p className="text-xs font-mono text-cream/70 mb-4 leading-relaxed line-clamp-6">
                    {project.description}
                  </p>

                  {/* Tech stack and link (pushed to the bottom using 'mt-auto') */}
                  <div className="mt-auto pt-4">
                    <div className="font-mono text-[10px] text-cream/40 mb-2 uppercase tracking-widest">
                      Tech Stack
                    </div>
                    <div className="font-mono text-[11px] lg:text-xs text-cream/70 mb-8 leading-relaxed line-clamp-3">
                      {project.stack}
                    </div>
                    
                    {project.link === "#" ? (
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-white/30 uppercase cursor-not-allowed">
                        COMING SOON <span className="inline-block">—</span>
                      </span>
                    ) : (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-white hover:text-red transition-colors group/link uppercase"
                      >
                        VIEW PROJECT <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
                      </a>
                    )}
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
