import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Settings, Globe } from 'lucide-react';

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++"]
  },
  {
    category: "Frontend",
    icon: Monitor,
    skills: ["React", "Vite", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Flask", "Spring Boot"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "MongoDB", "SQLAlchemy"]
  },
  {
    category: "Tools",
    icon: Settings,
    skills: ["Git", "GitHub", "Docker", "NPM/PNPM", "VS Code"]
  },
  {
    category: "Other",
    icon: Globe,
    skills: ["Vercel", "Render", "CI/CD", "Pandas", "NumPy", "Matplotlib"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-cream py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/10 relative">
      {/* Stacked Square Motif Bottom Left */}
      <div className="absolute bottom-12 left-12 hidden md:block">
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
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase text-black tracking-tighter">
            SKILLS & <span className="text-red">TOOLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-4 text-red">
                <group.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-mono text-sm tracking-widest text-black/50 mb-6 uppercase border-b border-black/10 pb-4">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-base text-black/80 tracking-tight">
                    {skill}
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
