import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Settings, Globe } from 'lucide-react';

const skillCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "SQL"]
  },
  {
    category: "Frontend",
    icon: Monitor,
    skills: ["React", "Vite", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Flask", "Spring Boot", "REST APIs"]
  },
  {
    category: "Database",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "MongoDB", "SQLAlchemy"]
  },
  {
    category: "Tools",
    icon: Settings,
    skills: ["Git", "GitHub", "Docker", "NPM/PNPM", "VS Code", "Figma"]
  },
  {
    category: "Other",
    icon: Globe,
    skills: ["Linux", "Nginx", "Vercel", "Render", "Pandas", "NumPy"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-cream paper-texture py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/10 relative overflow-hidden">
      
      {/* Top right red block from the template */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-12 md:h-24 bg-red hidden lg:block"></div>

      {/* Bottom left black block from the template */}
      <div className="absolute bottom-16 left-0 w-8 h-16 bg-[#111] hidden lg:block"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase text-black tracking-tighter">
            <span className="border-b-4 border-black pb-1">SKILLS</span> & <span className="text-red">TOOLS</span>
          </h2>
        </motion.div>

        <div className="border-y border-black/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-black/15">
            {skillCategories.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className={`flex flex-col py-8 px-4 lg:px-6 hover:bg-black/5 transition-colors ${groupIndex === 0 ? 'lg:pl-0' : ''}`}
              >
                <div className="flex items-center gap-3 mb-8 text-black">
                  <group.icon size={26} strokeWidth={2.5} />
                  <h3 className="font-display text-[17px] tracking-wider uppercase pt-1">
                    {group.category}
                  </h3>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="font-mono text-[13px] lg:text-sm text-black/80 tracking-tight">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
