import { motion } from 'framer-motion';
import { Code, LayoutTemplate, Server, Database, Wallet, Briefcase, BarChart, RefreshCcw, Rocket } from 'lucide-react';

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building complete web applications with modern frontend interfaces, backend systems, databases, APIs, authentication, and deployment.",
    icon: Code
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive interfaces using React, Next.js, Vite, JavaScript, TypeScript, Tailwind CSS, and modern UI technologies.",
    icon: LayoutTemplate
  },
  {
    title: "Backend Development",
    description: "Developing backend systems, REST APIs, authentication systems, database integrations, and application logic using Python, Flask, Node.js, Express.js, and Spring Boot.",
    icon: Server
  },
  {
    title: "Database Development",
    description: "Designing and integrating relational and NoSQL databases, including PostgreSQL, SQLite, and MongoDB.",
    icon: Database
  },
  {
    title: "Financial Technology Applications",
    description: "Developing software for personal finance, financial analysis, and financial decision-support systems.",
    icon: Wallet
  },
  {
    title: "Business Websites & Digital Products",
    description: "Building modern, responsive business websites and digital products for companies, organizations, and freelance clients.",
    icon: Briefcase
  },
  {
    title: "Data Analysis & Visualization",
    description: "Working with structured data using Pandas and NumPy and creating meaningful visualizations and analytical outputs using Matplotlib.",
    icon: BarChart
  },
  {
    title: "Application Modernization",
    description: "Updating existing applications with modern technologies, improved architecture, responsive interfaces, optimized backend systems, and better database integration.",
    icon: RefreshCcw
  },
  {
    title: "Deployment & Development Workflow",
    description: "Working with Git, GitHub, Docker, Vercel, Render, and CI/CD-oriented development workflows.",
    icon: Rocket
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#1a1a1a] text-cream py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-cream tracking-tighter">
              SERVICES I <span className="text-red">PROVIDE</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-sm tracking-widest hover:text-red transition-colors group pb-2 border-b border-transparent hover:border-red">
            EXPLORE ALL SERVICES <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#222] border border-white/5 p-8 hover:border-white/20 transition-colors duration-300 overflow-hidden"
            >
              <div className="mb-6">
                <service.icon size={32} strokeWidth={1.5} className="text-red group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-medium mb-4 tracking-tight text-white uppercase">{service.title}</h3>
              <p className="text-cream/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
