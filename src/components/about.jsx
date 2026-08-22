import { motion } from 'framer-motion';
import { MapPin, BookOpen, Heart, Languages } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full">
      {/* Stacked Square Motif Top Right */}
      <div className="absolute top-12 right-12 hidden md:block">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-red translate-x-2 -translate-y-2 flex items-center justify-center text-white text-xs font-mono">+</div>
          <div className="absolute inset-0 border-2 border-black"></div>
        </div>
      </div>

      <div className="bg-cream py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl uppercase text-black tracking-tighter">
              ABOUT <span className="text-red">ME</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Bio */}
            <div className="md:col-span-7 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-mono text-sm tracking-widest text-black/50 mb-4 uppercase">Bio</h3>
                <p className="text-2xl md:text-3xl leading-relaxed tracking-tight">
                  Full-stack developer building fast, functional, visually impactful digital experiences — turning ideas into real-world products across frontend, backend, databases, APIs, and finance-focused applications.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a href="#journey" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest hover:text-red transition-colors group mt-4 uppercase font-bold border-b-2 border-transparent hover:border-red pb-1">
                  MORE ABOUT ME <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Details */}
            <div className="md:col-span-5 flex flex-col gap-8">
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1"><MapPin size={24} className="text-red" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-1 uppercase">Location</h3>
                  <p className="text-xl font-medium">Kerala, India</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1"><BookOpen size={24} className="text-red" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-1 uppercase">Education</h3>
                  <p className="text-lg">MCA (2024–2026, Semester 3)</p>
                  <p className="text-lg">BCA (2021–2024)</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1"><Languages size={24} className="text-red" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-1 uppercase">Languages</h3>
                  <p className="text-lg">English, Malayalam, Hindi (understand)</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1"><Heart size={24} className="text-red" /></div>
                <div>
                  <h3 className="font-mono text-sm tracking-widest text-black/50 mb-1 uppercase">Interests</h3>
                  <p className="text-lg">Coding, UI/UX, Finance, Moto Riding, Anime & Manhwa</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Charcoal quote band */}
      <div className="relative bg-black text-cream py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Quotes */}
        <div className="absolute top-[-50px] left-[-20px] text-[300px] font-display text-white/[0.03] select-none leading-none z-0">
          "
        </div>
        
        {/* Corner Accents */}
        <div className="absolute top-8 left-8 text-red font-mono text-xl">+</div>
        <div className="absolute top-8 right-8 text-red font-mono text-xl">+</div>
        <div className="absolute bottom-8 left-8 text-red font-mono text-xl">+</div>
        <div className="absolute bottom-8 right-8 text-red font-mono text-xl">+</div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-tight">
              EVERY APPLICATION IS FRONTEND, BACKEND, DATA, AND LOGIC WORKING AS ONE — I BUILD WITH PERSISTENCE AND AN EYE FOR <span className="text-red">WHAT'S PRACTICAL.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
