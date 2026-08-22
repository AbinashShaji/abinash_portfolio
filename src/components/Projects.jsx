import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    num: "01",
    title: "Finzave",
    tag: "Financial Dashboard",
    description: "Finzave is a personal finance and financial decision-support system designed to help users understand their financial behaviour, manage income and expenses, analyze spending patterns, track financial goals, and make better financial decisions.",
    stack: "Flask, React, PostgreSQL/SQLite, Pandas, Chart.js",
    link: "#",
    image: "/images/project/finzave.png"
  },
  {
    num: "02",
    title: "SmartVest",
    tag: "Investment Decision Support",
    description: "SmartVest is a financial decision-support system focused on analyzing a user's financial situation and providing useful financial insights and recommendations.",
    stack: "Python, Flask, SQLite, Pandas, Matplotlib",
    link: "https://smartvest.pythonanywhere.com",
    image: "/images/project/smartvest_1.png"
  },
  {
    num: "03",
    title: "Triads Future",
    tag: "Business Consulting Website",
    description: "Triads Future is a premium business website being developed for a technology consulting and growth-oriented company.",
    stack: "Next.js, TypeScript, Tailwind, Framer Motion",
    link: "#",
    image: "/images/project/traids future1.png"
  }
];

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
    <section id="projects" className="bg-cream text-black py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter">
              SELECTED <span className="text-red">PROJECTS</span>
            </h2>
          </div>
          <a href="#home" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest hover:text-red transition-colors group pb-2 border-b border-transparent hover:border-red">
            VIEW ALL PROJECTS <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col h-full bg-[#111] text-white border border-black/10 relative p-6 group hover:border-black/30 transition-colors"
            >
              {/* Red Badge */}
              <div className="absolute top-0 right-0 bg-red text-white font-mono text-sm tracking-widest px-4 py-1 z-10 -translate-y-1/2 translate-x-4">
                {project.num}
              </div>

              <div className="mb-6">
                <div className="font-mono text-xs tracking-widest text-red mb-2 uppercase">{project.tag}</div>
                <h3 className="font-display text-3xl uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>

              <ImageMagnifier src={project.image} alt={project.title} />
              
              <div className="flex-grow flex flex-col">
                <p className="text-sm text-white/70 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="font-mono text-xs text-white/60 mb-6 border-l border-white/20 pl-3 py-1">
                  {project.stack}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-white hover:text-red transition-colors group/link uppercase mt-auto"
                >
                  VIEW PROJECT <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
