"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Placeholder, could be configured
  const message = "Hello AetherNova Technologies, I would like to discuss my project.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-20"></span>
      <FaWhatsapp size={28} className="relative z-10" />
    </motion.a>
  );
}
