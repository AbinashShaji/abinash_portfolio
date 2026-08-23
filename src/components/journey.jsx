import { motion } from 'framer-motion';

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

      {/* Decorative blocks from template */}
      <div className="absolute top-16 left-0 w-8 h-24 bg-[#111] hidden xl:block"></div>
      <div className="absolute bottom-0 right-0 w-48 h-32 bg-red hidden xl:block z-0"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">

        {/* Top dividing line */}
        <div className="w-full h-px bg-black/15 mb-12 hidden md:block"></div>

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

        {/* Horizontal Timeline Container */}
        <div className="relative w-full mb-32 hidden lg:block">
          {/* Main timeline line */}
          <div className="absolute top-0 left-0 w-full h-px bg-black/30"></div>

          <div className="grid grid-cols-6 relative pt-0">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col items-start pt-6 group ${index !== 5 ? 'border-r border-black/15' : ''} ${index === 0 ? 'pr-6' : index === 5 ? 'pl-6' : 'px-6'}`}
              >
                {/* Red Box Number resting on the line */}
                <div className={`absolute -top-[14px] ${index === 0 ? 'left-0' : 'left-6'} w-7 h-7 bg-red text-white flex items-center justify-center font-display text-sm tracking-widest z-10 group-hover:scale-110 transition-transform`}>
                  {step.num}
                </div>

                <h3 className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase mb-3 text-black flex items-start gap-1 mt-6">
                  <span className="text-red text-xl leading-none font-display block translate-y-[-2px]">[</span>
                  <span>{step.title}</span>
                </h3>

                <p className="font-mono text-sm text-black/90 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
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
              <div className="absolute left-[-14px] top-6 w-7 h-7 bg-red text-white flex items-center justify-center font-display text-sm group-hover:scale-110 transition-transform">
                {step.num}
              </div>

              <h3 className="font-mono text-sm lg:text-base font-bold tracking-widest uppercase mb-2 text-black flex items-start gap-1">
                <span className="text-red text-xl leading-none font-display block translate-y-[-2px]">[</span>
                <span>{step.title}</span>
              </h3>
              <p className="font-mono text-sm text-black/90 leading-relaxed pr-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="border-t border-b border-black/15 py-12 md:py-16 mt-16 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-black/15 gap-y-10 md:gap-y-0">
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

function StatBlock({ num, symbol, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center py-2"
    >
      <div className="font-display text-5xl md:text-6xl tracking-tighter mb-2 text-black flex items-center">
        {num}
        <span className="text-red">{symbol}</span>
      </div>
      <div className="font-mono text-xs tracking-widest text-black/60 uppercase">
        {label}
      </div>
    </motion.div>
  );
}
