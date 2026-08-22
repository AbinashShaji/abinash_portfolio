import { motion } from 'framer-motion';

const journeySteps = [
  { num: "01", title: "Started Coding", desc: "BCA foundations, web dev fundamentals" },
  { num: "02", title: "Foundation", desc: "BCA completed, CGPA 7.58, first apps" },
  { num: "03", title: "Full-Stack", desc: "Moved into frontend + backend together" },
  { num: "04", title: "Projects", desc: "Finzave, SmartVest, client work" },
  { num: "05", title: "MCA & Cloud", desc: "Currently Sem 3, Cloud Computing cert" },
  { num: "06", title: "Focus", desc: "Deepening DevOps, building for clients" }
];

export default function Journey() {
  return (
    <section id="journey" className="bg-cream py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Stacked Square Motif Top Right */}
      <div className="absolute top-16 right-16 hidden md:block">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-red translate-x-2 -translate-y-2 flex items-center justify-center text-white text-xs font-mono">+</div>
          <div className="absolute inset-0 border-2 border-black"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase text-black tracking-tighter">
            MY <span className="text-red">JOURNEY</span>
          </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative w-full mb-32 hidden lg:block">
          {/* Main line */}
          <div className="absolute top-6 left-0 w-full h-px bg-black/20"></div>
          
          <div className="grid grid-cols-6 gap-4">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Square Node */}
                <div className="w-12 h-12 bg-red text-white border-2 border-black flex items-center justify-center font-mono text-sm group-hover:scale-110 transition-transform duration-300 z-10 mb-6 relative">
                  {/* Vertical connecting tick */}
                  <div className="absolute -top-3 left-1/2 w-px h-3 bg-black/40 -z-10 hidden group-hover:block"></div>
                  {step.num}
                </div>
                
                <h3 className="text-xl font-medium tracking-tight uppercase mb-2 leading-tight">{step.title}</h3>
                <p className="text-sm text-black/70 px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline (Mobile/Tablet) */}
        <div className="relative border-l border-black/20 ml-4 mb-24 lg:hidden">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 py-6 group"
            >
              <div className="absolute left-[-20px] top-6 w-10 h-10 bg-cream border border-black flex items-center justify-center font-mono text-xs group-hover:bg-red group-hover:text-white group-hover:border-red transition-colors duration-300">
                {step.num}
              </div>
              
              <h3 className="text-xl font-medium tracking-tight uppercase mb-1">{step.title}</h3>
              <p className="text-sm text-black/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t border-b border-black/20 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center md:border-r border-black/20"
          >
            <div className="font-display text-6xl md:text-7xl tracking-tighter mb-2">30<span className="text-red">+</span></div>
            <div className="font-mono text-sm tracking-widest text-black/60 uppercase">Technologies</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center md:border-r border-black/20"
          >
            <div className="font-display text-6xl md:text-7xl tracking-tighter mb-2">3<span className="text-red">+</span></div>
            <div className="font-mono text-sm tracking-widest text-black/60 uppercase">Major Projects</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="font-display text-6xl md:text-7xl tracking-tighter mb-2">∞</div>
            <div className="font-mono text-sm tracking-widest text-black/60 uppercase">Learning</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
