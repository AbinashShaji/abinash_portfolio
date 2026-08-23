import { motion } from 'framer-motion';
import { Code, LayoutTemplate, Server, Database, Wallet, BarChart } from 'lucide-react';

const services = [
  {
    title: "FULL-STACK DEVELOPMENT",
    description: "Building complete web applications with modern frontend interfaces, backend systems, and APIs.",
    items: ["React & Next.js", "Node.js & Python", "RESTful APIs"],
    icon: Code
  },
  {
    title: "FRONTEND DEVELOPMENT",
    description: "Creating responsive and interactive interfaces using React, modern UI tools and animations.",
    items: ["React + Vite", "Tailwind CSS", "Framer Motion"],
    icon: LayoutTemplate
  },
  {
    title: "BACKEND DEVELOPMENT",
    description: "Developing robust backend systems, authentication workflows, and core application logic.",
    items: ["Express.js & Node", "Flask & Python", "Spring Boot"],
    icon: Server
  },
  {
    title: "DATABASE DEVELOPMENT",
    description: "Designing and integrating relational and NoSQL databases for scalable data storage.",
    items: ["PostgreSQL & SQL", "SQLite & SQLAlchemy", "MongoDB"],
    icon: Database
  },
  {
    title: "FINTECH APPLICATIONS",
    description: "Developing software for personal finance, financial analysis, and decision-support systems.",
    items: ["Personal Finance", "Financial Analysis", "Data Workflows"],
    icon: Wallet
  },
  {
    title: "DATA ANALYSIS",
    description: "Working with structured data and creating meaningful analytical visualizations.",
    items: ["Pandas & NumPy", "Data Visualization", "Matplotlib"],
    icon: BarChart
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-cream paper-texture py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-black tracking-tighter">
              <span className="border-b-4 border-black pb-1">SERVICES</span> I <span className="text-red">PROVIDE</span>
            </h2>
          </div>
          <a href="#services" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest hover:text-red transition-colors group text-black uppercase pb-1">
            EXPLORE ALL SERVICES <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] p-6 lg:p-8 flex flex-col items-center group relative overflow-hidden"
            >
              <div className="mb-6">
                <service.icon size={48} strokeWidth={1} className="text-red transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="font-display text-xl md:text-2xl tracking-wide text-white uppercase text-center mb-4 leading-tight">{service.title}</h3>
              
              <p className="font-mono text-xs md:text-sm text-cream/70 leading-relaxed text-center mb-8">
                {service.description}
              </p>
              
              <ul className="w-full flex flex-col gap-3 mt-auto">
                {service.items.map((item, i) => (
                  <li key={i} className="font-mono text-xs text-cream/90 flex items-start gap-2">
                    <span className="text-red/80 select-none mt-0.5">•</span> 
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
