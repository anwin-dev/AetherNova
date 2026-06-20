"use client";

import { motion, Variants } from "framer-motion";
import { 
  FaGlobe, 
  FaCode, 
  FaCloud, 
  FaShoppingCart, 
  FaHeartbeat, 
  FaChartBar, 
  FaServer, 
  FaPaintBrush, 
  FaTools 
} from "react-icons/fa";

const services = [
  { icon: FaGlobe, title: "Website Development", desc: "Custom, responsive websites built with modern frameworks for optimal performance." },
  { icon: FaCode, title: "MERN Stack Development", desc: "Full-stack web applications using MongoDB, Express.js, React, and Node.js." },
  { icon: FaCloud, title: "SaaS Applications", desc: "Scalable software-as-a-service platforms with multi-tenant architectures." },
  { icon: FaShoppingCart, title: "E-Commerce Development", desc: "Robust online stores with secure payment gateways and inventory management." },
  { icon: FaHeartbeat, title: "Healthcare Platforms", desc: "HIPAA-compliant telemedicine and clinic management systems." },
  { icon: FaChartBar, title: "Admin Dashboards", desc: "Custom data visualization and management interfaces for your business." },
  { icon: FaServer, title: "API Development", desc: "Secure, RESTful, and GraphQL APIs to connect your digital ecosystem." },
  { icon: FaPaintBrush, title: "UI/UX Design", desc: "User-centric design focusing on aesthetics, accessibility, and conversion." },
  { icon: FaTools, title: "Maintenance & Support", desc: "Ongoing updates, security patches, and technical support for peace of mind." },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary-bg relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive Digital <span className="text-gradient">Solutions</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-text"
          >
            From stunning marketing websites to complex enterprise platforms, we have the expertise to bring your vision to life.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative glass-card p-8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/50">
                  <service.icon className="text-3xl text-gray-300 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                  {service.title}
                </h4>
                <p className="text-muted-text group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
