"use client";

import { motion } from "framer-motion";
import { FaBolt, FaCode, FaSearch, FaMobileAlt, FaServer, FaShieldAlt, FaPalette, FaUsers } from "react-icons/fa";

const features = [
  { icon: FaBolt, title: "Fast Delivery", desc: "Agile methodologies ensuring rapid turnaround without compromising quality." },
  { icon: FaCode, title: "Clean Code", desc: "Maintainable, scalable, and documented codebase following industry best practices." },
  { icon: FaSearch, title: "SEO Friendly", desc: "Built-in optimization to rank higher and increase organic visibility." },
  { icon: FaMobileAlt, title: "Mobile Responsive", desc: "Flawless experiences across all devices, from mobile to ultra-wide screens." },
  { icon: FaServer, title: "Scalable Architecture", desc: "Systems designed to grow seamlessly with your business demands." },
  { icon: FaShieldAlt, title: "Secure Applications", desc: "Enterprise-grade security protocols to protect your sensitive data." },
  { icon: FaPalette, title: "Modern UI/UX", desc: "Award-winning designs that captivate users and drive conversions." },
  { icon: FaUsers, title: "Ongoing Support", desc: "Dedicated team available 24/7 for maintenance and immediate assistance." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The AetherNova <span className="text-gradient">Advantage</span>
            </h3>
            <p className="text-lg text-muted-text mb-8">
              We don't just build software; we build robust digital ecosystems tailored to your unique business goals. Partner with us for excellence at every step.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors group">
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-text text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
