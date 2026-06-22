"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  // {
  //   title: "Kaffa Maali Tea Shop",
  //   url: "https://kaffa-maali-tea-shop-yjna.vercel.app/",
  //   desc: "Modern tea shop website with elegant design and responsive experience.",
  //   tech: ["React", "Tailwind CSS", "Framer Motion"],
  //   image: "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?auto=format&fit=crop&w=800&q=80",
  // },
  {
    title: "Sole Vibe Shoe Shop",
    url: "https://sole-vibe-shoe-shop.vercel.app/",
    desc: "Modern e-commerce shoe store with attractive product showcase.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MediCare Clinic",
    url: "https://medi-care-clinic-kappa.vercel.app/doctors",
    desc: "Healthcare management platform with doctor listing system.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "L'Etoile Restaurant",
    url: "https://lettoile-restaurant.vercel.app/",
    desc: "Luxury restaurant website with premium dining experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectCard = ({ project, index }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative [perspective:1000px] z-10"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
      >
        <div className="relative h-64 md:h-80 overflow-hidden" style={{ transform: "translateZ(50px)" }}>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Action Buttons overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            >
              <FaExternalLinkAlt />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:bg-white/30 transition-all border border-white/20"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        
        <div className="p-8" style={{ transform: "translateZ(30px)" }}>
          <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
          <p className="text-muted-text mb-6">{project.desc}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            Featured Projects
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Showcasing Our <span className="text-gradient">Best Work</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
