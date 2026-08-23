/**
 * JOURNEY COMPONENT (journey.jsx)
 * 
 * What this file is:
 * This component acts as a timeline showing the developer's educational and professional history.
 * 
 * What it's responsible for:
 * It displays a timeline of events. Because horizontal timelines don't work well on tiny phone screens, 
 * this component actually contains TWO timelines: a horizontal one for desktop, and a vertical one for mobile.
 * It also displays a row of statistics (Projects Built, Hours Coded) at the bottom.
 * 
 * Where it's used:
 * Rendered in `App.jsx`, immediately below the Skills section.
 */

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Array containing the timeline steps in chronological order.
const journeySteps = [
  {
    num: "01",
    title: "STARTED CODING",
    desc: "Began my coding journey exploring programming fundamentals and building a strong foundation during my BCA."
  },
  {
    num: "02",
    title: "LEARNED & BUILT",
    desc: "Developed an interest in software development, built practical applications, and explored new technologies."
  },
  {
    num: "03",
    title: "FULL-STACK",
    desc: "Moved towards full-stack development, working with frontend technologies alongside backend frameworks."
  },
  {
    num: "04",
    title: "PROJECT DEVELOPMENT",
    desc: "Applied skills to applications like SmartVest and Finzave, building real-world interfaces and APIs."
  },
  {
    num: "05",
    title: "FREELANCE WORK",
    desc: "Worked on client-oriented projects like Triads Future, translating business requirements into digital products."
  },
  {
    num: "06",
    title: "MCA & CLOUD",
    desc: "Pursuing MCA (Sem 3) with a focus on full-stack development, cloud computing, and scalable systems."
  }
];

export default function Journey() {
  return (
    <section id="journey" className="bg-cream paper-texture py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Decorative background blocks for the brutalist aesthetic */}
      <div className="absolute top-16 left-0 w-8 h-24 bg-[#111] hidden xl:block"></div>
      <div className="absolute bottom-0 right-0 w-48 h-32 bg-red hidden xl:block z-0"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">

        {/* Top dividing line (hidden on mobile) */}
        <div className="w-full h-px bg-black/15 mb-12 hidden md:block"></div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center gap-4 xl:pl-16"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase text-black tracking-tighter">
            MY <span className="text-red">JOURNEY</span>
          </h2>
        </motion.div>

        {/* 
          DESKTOP TIMELINE (Horizontal) 
          'hidden lg:block' means this entire block disappears on screens smaller than a laptop.
        */}
        <div className="relative w-full mb-32 hidden lg:block">
          {/* The main continuous horizontal line that runs across the screen */}
          <div className="absolute top-0 left-0 w-full h-px bg-black/30"></div>

          <div className="grid grid-cols-6 relative pt-0">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Logic check: if it's not the last item (index !== 5), add a border on the right to separate it from the next one.
                className={`relative flex flex-col items-start pt-6 group ${index !== 5 ? 'border-r border-black/15' : ''} ${index === 0 ? 'pr-6' : index === 5 ? 'pl-6' : 'px-6'}`}
              >
                {/* The Red Box Number resting directly on top of the horizontal line */}
                <div className={`absolute -top-[14px] ${index === 0 ? 'left-0' : 'left-6'} w-7 h-7 bg-red text-white flex items-center justify-center font-display text-sm tracking-widest z-10 group-hover:scale-110 transition-transform`}>
                  {step.num}
                </div>

                {/* Step Title */}
                <h3 className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase mb-3 text-black flex items-start gap-1 mt-6">
                  <span className="text-red text-xl leading-none font-display block translate-y-[-2px]">[</span>
                  <span>{step.title}</span>
                </h3>

                {/* Step Description */}
                <p className="font-mono text-sm text-black/90 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 
          MOBILE TIMELINE (Vertical) 
          'lg:hidden' means this block ONLY shows on phones and tablets, and hides on laptops.
        */}
        <div className="relative border-l border-black/30 ml-4 mb-24 lg:hidden">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 py-6 group"
            >
              {/* The Red Box Number resting on the vertical line */}
              <div className="absolute left-[-14px] top-6 w-7 h-7 bg-red text-white flex items-center justify-center font-display text-sm group-hover:scale-110 transition-transform">
                {step.num}
              </div>

              {/* Title & Description */}
              <h3 className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase mb-2 text-black flex items-start gap-1">
                <span className="text-red text-xl leading-none font-display block translate-y-[-2px]">[</span>
                <span>{step.title}</span>
              </h3>
              <p className="font-mono text-sm text-black/90 leading-relaxed pr-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 
          STATS STRIP (Bottom section)
          This renders a simple row of numbers using the helper 'StatBlock' component defined below.
        */}
        <div className="border-t border-b border-black/15 py-12 md:py-16 mt-16 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-black/15 gap-y-10 md:gap-y-0">
            {/* We pass specific data (props) like num, symbol, and label into our custom component */}
            <StatBlock num="4" symbol="+" label="PROJECTS BUILT" />
            <StatBlock num="500" symbol="+" label="HOURS CODED" />
            <StatBlock num="30" symbol="+" label="TECHNOLOGIES" />
            <StatBlock num="∞" symbol="" label="LEARNING" />
          </div>
        </div>

      </div>
    </section>
  );
}

/**
 * HELPER COMPONENT (StatBlock)
 * 
 * What this is: 
 * A tiny, reusable mini-component defined specifically for the Journey page.
 * 
 * Why it exists:
 * Instead of writing the same HTML 4 times for the 4 stats above, we write it once here,
 * and pass in "props" (variables) to customize it.
 * 
 * Props explained:
 * - num: The big number (e.g. "500")
 * - symbol: A symbol next to the number (e.g. "+")
 * - label: The text underneath (e.g. "HOURS CODED")
 */
function StatBlock({ num, symbol, label }) {
  // Motion values and transforms for the counter animation
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  
  // Detect when the component comes into the viewport
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Check if the passed number is a valid number (e.g. 500) or a symbol (e.g. '∞')
  const isNumber = !isNaN(Number(num));
  const targetNum = isNumber ? Number(num) : 0;

  // Trigger the animation when the component is in view
  useEffect(() => {
    if (isInView && isNumber) {
      // Animate the 'count' motion value from 0 to 'targetNum' over 2 seconds
      const animation = animate(count, targetNum, { duration: 2, ease: "easeOut" });
      
      // Cleanup function to stop animation if component unmounts
      return () => animation.stop();
    }
  }, [count, targetNum, isInView, isNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center py-2"
    >
      <div className="font-display text-5xl md:text-6xl tracking-tighter mb-2 text-black flex items-center">
        {/* Render the animated number if it's a valid number, otherwise just render the string (e.g. for '∞') */}
        {isNumber ? <motion.span>{rounded}</motion.span> : <span>{num}</span>}
        <span className="text-red">{symbol}</span>
      </div>
      <div className="font-mono text-xs tracking-widest text-black/60 uppercase">
        {label}
      </div>
    </motion.div>
  );
}
