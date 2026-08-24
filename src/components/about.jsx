/**
 * ABOUT COMPONENT (about.jsx)
 * 
 * What this file is:
 * This component renders the "About Me" section of the portfolio.
 * 
 * What it's responsible for:
 * It displays a short biography, contact/location details, education history, and 
 * interests. It also features a bold decorative quote at the bottom.
 * 
 * Where it's used:
 * Rendered in `App.jsx`, immediately below the Hero section.
 * 
 * Dependencies:
 * - 'framer-motion': Used to fade and slide elements in as the user scrolls down to them.
 * - 'lucide-react': Provides the small icons (User, MapPin, etc.) used next to personal details.
 */

import TypewriterLoop from './ui/typewriter-loop';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Asterisk, Languages, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    // The main wrapper for the about section. id="about" allows the Navigation bar to scroll here.
    <section id="about" className="relative w-full">
      {/* Top half with cream background and paper texture */}
      <div className="bg-cream paper-texture py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* 
            Section Header 
            <motion.div> wraps the header to animate it.
            'initial' sets the starting state (invisible, moved down 50px).
            'whileInView' triggers the animation when this element enters the screen.
            'viewport={{ once: true }}' ensures it only animates the first time you scroll past it.
          */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative z-10"
          >
            {/* The new TypewriterLoop component customized for the About section */}
            <TypewriterLoop 
              LeadText="ABOUT"
              morphingText={["ME"]}
              transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
              className="font-display text-4xl md:text-5xl uppercase tracking-tighter flex-nowrap items-baseline text-black"
              LeadTextClassName="border-b-4 border-black pb-1 mr-2"
            />
          </motion.div>

          {/* Grid Layout: Splits the remaining space into 12 columns on medium screens and larger */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: The biography text (takes up 6 out of 12 columns) */}
            <div className="md:col-span-6 flex flex-col gap-8 relative z-10 md:border-r border-black/15 md:pr-12 lg:pr-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-black/90">
                  I'm Abinash, a full-stack developer from Kerala, India. I build digital experiences that are fast, functional and visually impactful.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-black/90">
                  I enjoy turning ideas into real-world products that solve problems and create value across frontend, backend, databases, APIs, and finance-focused applications.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2"
              >
                {/* Link to the journey section */}
                <a href="#journey" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest transition-colors group uppercase font-bold text-black hover:text-red">
                  MORE ABOUT ME <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: The quick facts (takes up the other 6 columns) */}
            <div className="md:col-span-6 flex flex-col gap-6 relative z-10 pt-2">
              
              {/* Decorative Graphic: This is just visual flair (a black and red box with a plus sign) */}
              <div className="absolute top-0 right-0 hidden lg:block z-0 pointer-events-none translate-x-16 -translate-y-4 opacity-80">
                <div className="relative w-64 h-64">
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-black"></div>
                  <div className="absolute top-0 right-0 w-56 h-56 bg-red flex items-center justify-center">
                    <span className="absolute top-4 left-4 text-black font-mono text-2xl leading-none">+</span>
                  </div>
                </div>
              </div>

              {/* Personal Detail: Name */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex items-start gap-4 relative z-10"
              >
                <div className="mt-1"><User size={24} className="text-black" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-red mb-1 uppercase">Name</h3>
                  <p className="text-lg font-medium text-black">Abinash Shaji</p>
                </div>
              </motion.div>

              {/* Personal Detail: Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4 relative z-10"
              >
                <div className="mt-1"><MapPin size={24} className="text-black" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-red mb-1 uppercase">Location</h3>
                  <p className="text-lg font-medium text-black">Kerala, India</p>
                </div>
              </motion.div>

              {/* Personal Detail: Education */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4 relative z-10"
              >
                <div className="mt-1"><GraduationCap size={24} className="text-black" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-red mb-1 uppercase">Education</h3>
                  <p className="text-lg font-medium text-black">MCA (2024–2026, Semester 3)</p>
                  <p className="text-lg font-medium text-black">BCA (2021–2024)</p>
                </div>
              </motion.div>
              
              {/* Personal Detail: Interests */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4 relative z-10"
              >
                <div className="mt-1"><Asterisk size={24} className="text-black" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-red mb-1 uppercase">Interests</h3>
                  <p className="text-lg font-medium text-black">Coding, UI/UX, Finance, Moto Riding, Anime & Manhwa</p>
                </div>
              </motion.div>
              
              {/* Personal Detail: Languages */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start gap-4 relative z-10"
              >
                <div className="mt-1"><Languages size={24} className="text-black" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-red mb-1 uppercase">Languages</h3>
                  <p className="text-lg font-medium text-black">English, Malayalam, Hindi (understand)</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM HALF: The charcoal band with the big quote */}
      <div className="relative bg-black py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        
        {/* Large background decorative quote icon (very faint SVG) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-[10%] lg:left-[15%] w-48 md:w-72 lg:w-96 text-white/[0.03] select-none pointer-events-none z-0 mt-4 md:mt-8">
          <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M14.9 30H4V18.1c0-4.8 1.4-8.8 4.2-12C11 2.9 14.8 1.1 19.6 0v6.1c-2.4.5-4.2 1.6-5.4 3.3-1.1 1.7-1.7 3.9-1.7 6.5h2.4V30zm19.5 0H23.5V18.1c0-4.8 1.4-8.8 4.2-12C30.5 2.9 34.3 1.1 39.1 0v6.1c-2.4.5-4.2 1.6-5.4 3.3-1.1 1.7-1.7 3.9-1.7 6.5h2.4V30z" />
          </svg>
        </div>
        
        <div className="relative z-10 w-fit mx-auto px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10">
          
          {/* Four small decorative corner accents (+) around the quote */}
          <div className="absolute top-0 left-0 text-white/50 font-mono text-xl md:text-2xl leading-none -translate-x-[45%] -translate-y-1/2">+</div>
          <div className="absolute top-0 right-0 text-white/50 font-mono text-xl md:text-2xl leading-none translate-x-[45%] -translate-y-1/2">+</div>
          <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-l-[2px] border-b-[2px] border-red -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-r-[2px] border-b-[2px] border-red translate-x-1/2 translate-y-1/2"></div>

          {/* 
            The main text of the quote, animating word-by-word when scrolled into view.
            We use staggerChildren on the parent <motion.p> so that each word (child) 
            animates one after another with a slight delay, creating a typewriter effect.
          */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                // delayChildren: wait before starting the first child's animation
                // staggerChildren: time delay between each consecutive child's animation
                transition: { staggerChildren: 0.12, delayChildren: 0.2 }
              }
            }}
            className="font-mono text-base md:text-xl lg:text-3xl uppercase tracking-[0.2em] leading-loose text-cream text-center interactable"
          >
            {/* Line 1: Split into an array of words and map to individual animated spans */}
            {"CODE IS NOT JUST LOGIC,".split(" ").map((word, i, arr) => (
              <span key={`l1-${i}`} className="inline-block whitespace-pre">
                <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block">{word}</motion.span>
                {i !== arr.length - 1 && " "}
              </span>
            ))}
            <br />

            {/* Line 2: Split and animated exactly like the first line */}
            {"IT'S A CRAFT OF SOLVING REAL PROBLEMS".split(" ").map((word, i, arr) => (
              <span key={`l2-${i}`} className="inline-block whitespace-pre">
                <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block">{word}</motion.span>
                {i !== arr.length - 1 && " "}
              </span>
            ))}
            <br />
            
            {/* 
              Line 3: Manually broken down because it contains specific styles (red text).
              Each word still gets its own <motion.span> with the same variants, so the stagger continues smoothly.
            */}
            <span className="inline-block whitespace-pre">
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block">WITH</motion.span>{" "}
            </span>
            <span className="inline-block whitespace-pre">
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block text-red font-bold">CREATIVITY</motion.span>{" "}
            </span>
            <span className="inline-block whitespace-pre">
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block">AND</motion.span>{" "}
            </span>
            <span className="inline-block whitespace-pre">
              <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block text-red font-bold">PERSISTENCE.</motion.span>
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
