"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "We start by understanding your business, goals, and technical requirements through an in-depth consultation." },
  { id: "02", title: "Planning", desc: "Our architects design the system architecture, choose the right tech stack, and create a comprehensive project roadmap." },
  { id: "03", title: "Design", desc: "Our UI/UX team creates wireframes and premium high-fidelity prototypes for your approval before coding begins." },
  { id: "04", title: "Development", desc: "Our engineers build the solution using clean, scalable, and modern code, with regular progress updates." },
  { id: "05", title: "Testing", desc: "Rigorous QA testing ensures the application is secure, bug-free, and performs flawlessly across all devices." },
  { id: "06", title: "Launch", desc: "We handle the deployment, configure the servers, and provide a smooth handover to ensure a successful launch." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            Development Process
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How We <span className="text-gradient">Deliver Excellence</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
              
              {/* Content Box */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/50 transition-colors">
                  <div className="text-6xl font-black text-white/5 absolute -top-4 -right-4 pointer-events-none group-hover:text-primary/10 transition-colors">
                    {step.id}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-4">
                    <span className="text-primary text-lg">{step.id}.</span> {step.title}
                  </h4>
                  <p className="text-muted-text">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
