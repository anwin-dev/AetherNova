"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const FloatingIcon = ({ children, delay, top, left }: any) => (
  <motion.div
    className="absolute text-white/20 hidden md:block"
    style={{ top, left }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-secondary-bg overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-aurora" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-accent/30 rounded-full blur-[120px] mix-blend-screen animate-aurora" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-aurora" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>
      
      {/* Floating Tech Icons */}
      <FloatingIcon top="20%" left="15%" delay={0}><FaReact size={60} /></FloatingIcon>
      <FloatingIcon top="15%" left="75%" delay={1}><SiNextdotjs size={70} /></FloatingIcon>
      <FloatingIcon top="70%" left="10%" delay={2}><SiTailwindcss size={50} /></FloatingIcon>
      <FloatingIcon top="65%" left="80%" delay={0.5}><FaNodeJs size={65} /></FloatingIcon>
      <FloatingIcon top="40%" left="85%" delay={1.5}><SiMongodb size={55} /></FloatingIcon>
      <FloatingIcon top="50%" left="5%" delay={2.5}><FaDocker size={45} /></FloatingIcon>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass mb-6"
        >
          <span className="text-sm font-medium text-gradient">Award-Winning Software Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
        >
          Transforming Ideas Into <br className="hidden md:block" />
          <span className="text-gradient">Powerful Digital Products</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-text max-w-3xl mx-auto mb-12"
        >
          We build modern websites, web applications, SaaS platforms, healthcare systems, restaurant websites, e-commerce solutions and custom software that helps businesses grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(56,189,248,0.5)]"
          >
            Book Free Consultation
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Animated Counters preview for Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10"
        >
          {[
            { value: "25+", label: "Projects Completed" },
            { value: "15+", label: "Happy Clients" },
            { value: "1.5+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-muted-text uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
