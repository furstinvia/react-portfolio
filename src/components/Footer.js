// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-rose-50 to-rose-200 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -bottom-12 -right-12 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute w-80 h-80 -top-12 -left-12 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold text-rose-900 font-serif">
                Furstin Aprilavia Putri
              </h2>
              <div className="h-2 w-2 bg-rose-500 rounded-full ml-1 mt-1"></div>
            </div>
            <p className="text-rose-800 mb-8 max-w-md leading-relaxed">
              Frontend Developer passionate about crafting beautiful, responsive
              interfaces and, lately, diving into data to make those experiences
              smarter and more impactful.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/furstinvia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-rose-900 hover:bg-white/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/furstinaptr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-rose-900 hover:bg-white/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/furstinaaptr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-rose-900 hover:bg-white/50 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-rose-900 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-rose-800 hover:text-rose-900 transition-all duration-300 inline-flex items-center hover:translate-x-1 transform"
                >
                  <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-rose-800 hover:text-rose-900 transition-all duration-300 inline-flex items-center hover:translate-x-1 transform"
                >
                  <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                  Meet Me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-rose-800 hover:text-rose-900 transition-all duration-300 inline-flex items-center hover:translate-x-1 transform"
                >
                  <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-rose-800 hover:text-rose-900 transition-all duration-300 inline-flex items-center hover:translate-x-1 transform"
                >
                  <span className="w-2 h-2 bg-rose-400 rounded-full mr-2"></span>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-rose-900 font-serif">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/40 backdrop-blur-sm p-2 rounded-lg mr-3 text-rose-700">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-rose-900 text-sm font-medium">Email</h4>
                  <a
                    href="mailto:yourname@example.com"
                    className="text-rose-800 hover:text-rose-900 transition-colors"
                  >
                    furstinaptr@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/40 backdrop-blur-sm p-2 rounded-lg mr-3 text-rose-700">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-rose-900 text-sm font-medium">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-rose-800 hover:text-rose-900 transition-colors"
                  >
                    +62 878 0391 5788
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white/40 backdrop-blur-sm p-2 rounded-lg mr-3 text-rose-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-rose-900 text-sm font-medium">
                    Location
                  </h4>
                  <p className="text-rose-800">Surabaya, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Copyright and Links */}
        <div className="pt-8 mt-8 border-t border-rose-300/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-rose-900 text-sm mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} By Furstin Aprilavia.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-rose-800 hover:text-rose-900 text-sm font-medium transition-colors duration-300"
              >
                Made with ❤️. Lov u!
              </a>
              <a
                href="#"
                className="text-rose-800 hover:text-rose-900 text-sm font-medium transition-colors duration-300"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
