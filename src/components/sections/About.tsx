"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pioneering the Future of <span className="text-gradient">Digital Experiences</span>
            </h3>
            <p className="text-lg text-muted-text mb-6">
              AetherNova Technologies is a premier software development company focused on creating modern digital experiences and scalable software solutions. We bridge the gap between complex business challenges and elegant, high-performance technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="glass-card p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                <p className="text-sm text-muted-text">To empower businesses globally through innovative, secure, and scalable digital solutions.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-accent text-xl">👁️</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                <p className="text-sm text-muted-text">To be the industry standard for enterprise-level SaaS and custom software development.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Core Values</h4>
              <div className="flex flex-wrap gap-3">
                {["Innovation", "Excellence", "Integrity", "Client-Centricity", "Agility"].map((value, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-white/10 glass text-sm text-gray-300">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image/Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-square md:aspect-[4/3] w-full flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 grid grid-cols-2 gap-6 p-8 w-full h-full">
                <div className="flex flex-col items-center justify-center text-center p-6 glass-card rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={25} suffix="+" />
                  </h4>
                  <p className="text-sm text-muted-text font-medium uppercase tracking-wider">Projects Completed</p>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center p-6 glass-card rounded-2xl mt-12 hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={15} suffix="+" />
                  </h4>
                  <p className="text-sm text-muted-text font-medium uppercase tracking-wider">Happy Clients</p>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center p-6 glass-card rounded-2xl -mt-12 hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={1} suffix=".5+" />
                  </h4>
                  <p className="text-sm text-muted-text font-medium uppercase tracking-wider">Years Exp.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center p-6 glass-card rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h4>
                  <p className="text-sm text-muted-text font-medium uppercase tracking-wider">Support</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-[60px]" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
