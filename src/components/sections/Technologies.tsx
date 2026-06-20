"use client";

import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaBootstrap
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiGit, SiPostman, SiVercel, SiRender 
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-secondary-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            Technologies
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Tech <span className="text-gradient">Stack</span>
          </motion.h3>
        </div>

        {/* Tech Wall grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl border border-white/10"
            >
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 w-[100px] bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    <skill.icon size={32} style={{ color: skill.color }} />
                    <span className="text-xs text-gray-300 font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="mt-24 py-10 border-y border-white/10 bg-background/50 backdrop-blur-sm relative overflow-hidden flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-16 px-8 items-center"
        >
          {/* Double array for infinite seamless scroll */}
          {[...techCategories.flatMap(c => c.skills), ...techCategories.flatMap(c => c.skills)].map((skill, i) => (
            <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <skill.icon size={40} style={{ color: skill.color }} />
              <span className="text-xl font-bold text-white">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
