import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Settings, Globe } from 'lucide-react';
import { ScrollVelocityRow } from './ui/scroll-velocity-text';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFlask, SiPostgresql, SiMongodb, SiVercel, SiSpringboot } from 'react-icons/si';

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

const marqueeItems = [
  { icon: FaReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaPython, name: "Python" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaJava, name: "Java" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: FaDocker, name: "Docker" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiVercel, name: "Vercel" }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-cream paper-texture py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-black/10 relative overflow-hidden">
      
      {/* Top right red block from the template */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-12 md:h-24 bg-red hidden lg:block z-0"></div>

      {/* Bottom left black block from the template */}
      <div className="absolute bottom-16 left-0 w-8 h-16 bg-[#111] hidden lg:block z-0"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center md:justify-start"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase text-black tracking-tighter">
            <span className="border-b-4 border-black pb-1">SKILLS</span> & <span className="text-red">TOOLS</span>
          </h2>
        </motion.div>

        <div className="border-y border-black/15 bg-cream/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-black/15">
            {skillCategories.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="flex flex-col items-center py-8 px-4 hover:bg-black/5 transition-colors"
              >
                <div className="flex flex-col items-center gap-3 mb-6 text-black">
                  <group.icon size={28} strokeWidth={2.5} className="mb-1 text-black" />
                  <h3 className="font-display text-[18px] tracking-wider uppercase text-center">
                    {group.category}
                  </h3>
                </div>
                
                <ul className="flex flex-col gap-3 w-full max-w-[140px]">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="font-mono text-[13px] lg:text-sm text-black/80 tracking-tight flex items-start gap-2">
                      <span className="text-red font-bold mt-[1px] text-lg leading-none">•</span>
                      <span className="pt-[2px]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee Section */}
        <div className="mt-20 md:mt-28 w-full overflow-hidden py-4">
          <ScrollVelocityRow baseVelocity={4}>
            {marqueeItems.map((item, index) => (
              <div key={index} className="mx-8 md:mx-12 flex items-center justify-center text-black hover:text-red transition-colors cursor-pointer group">
                <item.icon size={56} className="group-hover:scale-110 transition-transform opacity-90 group-hover:opacity-100" />
              </div>
            ))}
          </ScrollVelocityRow>
        </div>

      </div>
    </section>
  );
}
