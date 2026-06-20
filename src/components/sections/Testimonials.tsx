"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "TechNova Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "AetherNova Technologies completely transformed our online presence. Their attention to detail and premium design aesthetic is unmatched. The final product exceeded our expectations in every way.",
  },
  {
    name: "David Chen",
    company: "MediCare Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The healthcare platform they built for us is secure, blazing fast, and incredibly user-friendly. Their team was professional, responsive, and truly understood our complex HIPAA requirements.",
  },
  {
    name: "Elena Rodriguez",
    company: "L'Etoile Dining",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Our restaurant's new website captures the luxury of our brand perfectly. The 3D animations and smooth scrolling make our menu look spectacular. Our reservations have increased by 40% since launch.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary-bg relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <FaQuoteLeft className="text-4xl text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-300 italic mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary" />
                <div>
                  <h5 className="text-white font-bold">{t.name}</h5>
                  <p className="text-sm text-primary">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
