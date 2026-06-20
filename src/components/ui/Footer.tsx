import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-secondary-bg pt-20 pb-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none mt-[2px]">A</span>
              </div>
              <span className="text-xl font-bold tracking-wide text-white">
                AetherNova
              </span>
            </a>
            <p className="text-muted-text mb-6">
              Transforming ideas into powerful digital products. We build modern, scalable, and premium software solutions that help businesses grow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-all">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Portfolio", "Process", "Testimonials"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-muted-text hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["Website Development", "MERN Stack Development", "SaaS Applications", "E-Commerce Solutions", "Healthcare Platforms"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-muted-text hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-muted-text">
                <strong className="block text-white mb-1">Email:</strong>
                hello@aethernova.com
              </li>
              <li className="text-muted-text">
                <strong className="block text-white mb-1">Phone:</strong>
                +1 (555) 123-4567
              </li>
              <li className="text-muted-text">
                <strong className="block text-white mb-1">Location:</strong>
                123 Innovation Drive, Tech City, TC 90210
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-text text-sm">
            &copy; {new Date().getFullYear()} AetherNova Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-text">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
