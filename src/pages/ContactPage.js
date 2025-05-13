// src/pages/ContactPage.js
import React, { useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Heart,
  Instagram,
} from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Animation for elements
    const animateElements = () => {
      const title = document.getElementById("contact-title");
      const subtitle = document.getElementById("contact-subtitle");
      const contactItems = document.querySelectorAll(".contact-item");
      const availableBanner = document.getElementById("available-banner");
      const particles = document.querySelectorAll(".contact-particle");
      const stars = document.querySelectorAll(".floating-star");

      if (title && subtitle) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";

        setTimeout(() => {
          subtitle.style.opacity = "1";
          subtitle.style.transform = "translateY(0)";
        }, 300);
      }

      // Animate contact items with staggered delay
      contactItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, 400 + index * 150);
      });

      // Animate available banner
      if (availableBanner) {
        setTimeout(() => {
          availableBanner.style.opacity = "1";
          availableBanner.style.transform = "translateY(0)";
        }, 800);
      }

      // Animate particles
      particles.forEach((particle, index) => {
        setTimeout(() => {
          particle.style.opacity = "0.7";
          particle.style.transform = "translateY(0) scale(1)";
        }, 800 + index * 100);
      });

      // Animate stars
      stars.forEach((star, index) => {
        setTimeout(() => {
          star.style.opacity = "0.6";
          star.style.transform = "translateY(0) rotate(0deg)";
        }, 1000 + index * 150);
      });
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stars = document.querySelectorAll(".floating-star");

      stars.forEach((star, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        star.style.transform = `translateY(${scrollY * speed}px) rotate(${
          scrollY * 0.05
        }deg)`;
      });
    };

    // Run animations and set up event listeners
    setTimeout(animateElements, 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full opacity-30 blur-3xl transform -translate-y-1/3 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full opacity-30 blur-3xl transform translate-y-1/3 -translate-x-1/4"></div>

      {/* Decorative Stars */}
      <div className="absolute top-20 right-20 w-8 h-8 text-rose-200 opacity-0 floating-star transition-all duration-1000 transform translate-y-8 rotate-12">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-40 left-16 w-6 h-6 text-rose-300 opacity-0 floating-star transition-all duration-1000 transform translate-y-8 rotate-45">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-24 w-5 h-5 text-rose-400 opacity-0 floating-star transition-all duration-1000 transform translate-y-8 -rotate-12">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-60 left-28 w-4 h-4 text-rose-300 opacity-0 floating-star transition-all duration-1000 transform translate-y-8 rotate-30">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 right-1/5 w-4 h-4 bg-rose-200 rounded-full contact-particle opacity-0 transform translate-y-8 scale-0 transition-all duration-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-rose-300 rounded-full contact-particle opacity-0 transform translate-y-8 scale-0 transition-all duration-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-rose-100 rounded-full contact-particle opacity-0 transform translate-y-8 scale-0 transition-all duration-1000"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h1
            id="contact-title"
            className="text-5xl font-bold text-rose-900 mb-4 font-serif relative inline-block opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            Contact Me
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <div
              className="absolute -right-8 -top-8 w-6 h-6 text-rose-300 opacity-70 contact-particle"
              style={{ animationDelay: "0.5s" }}
            >
              <Heart fill="currentColor" size={24} />
            </div>
          </h1>
          <p
            id="contact-subtitle"
            className="text-rose-700 max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out to
            me through my social media profiles.
          </p>
        </div>

        {/* Simple Contact Card */}
        <div className="max-w-2xl mx-auto bg-rose-50 rounded-3xl p-8 shadow-lg relative overflow-hidden mb-12">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-rose-100/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-rose-100/50 rounded-full transform translate-x-1/2 translate-y-1/2"></div>

          {/* Title */}
          <div className="flex items-center mb-6 gap-4">
            <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-500">
              <MapPin size={20} />
            </div>
            <h2 className="text-2xl font-bold text-rose-800 font-serif">
              Let's Connect
            </h2>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 mb-8">
            {/* Email */}
            <div className="contact-item flex items-center opacity-0 transform -translate-x-8 transition-all duration-700">
              <div className="w-14 h-14 bg-rose-200/80 rounded-full flex items-center justify-center mr-5 shadow-sm">
                <Mail className="text-rose-500" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">Email</div>
                <a
                  href="mailto:furstinaptr@gmail.com"
                  className="text-rose-500 hover:text-rose-600 transition-colors"
                >
                  furstinaptr@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="contact-item flex items-center opacity-0 transform -translate-x-8 transition-all duration-700">
              <div className="w-14 h-14 bg-rose-200/80 rounded-full flex items-center justify-center mr-5 shadow-sm">
                <Github className="text-rose-500" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">GitHub</div>
                <a
                  href="https://github.com/furstinvia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-600 transition-colors"
                >
                  github.com/furstinvia
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="contact-item flex items-center opacity-0 transform -translate-x-8 transition-all duration-700">
              <div className="w-14 h-14 bg-rose-200/80 rounded-full flex items-center justify-center mr-5 shadow-sm">
                <Linkedin className="text-rose-500" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">LinkedIn</div>
                <a
                  href="https://linkedin.com/in/furstinaptr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-600 transition-colors"
                >
                  linkedin.com/in/furstinaptr
                </a>
              </div>
            </div>

            {/* Instagram - Added as requested */}
            <div className="contact-item flex items-center opacity-0 transform -translate-x-8 transition-all duration-700">
              <div className="w-14 h-14 bg-rose-200/80 rounded-full flex items-center justify-center mr-5 shadow-sm">
                <Instagram className="text-rose-500" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">Instagram</div>
                <a
                  href="https://instagram.com/furstinaaptr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-600 transition-colors"
                >
                  instagram.com/furstinaaptr
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item flex items-center opacity-0 transform -translate-x-8 transition-all duration-700">
              <div className="w-14 h-14 bg-rose-200/80 rounded-full flex items-center justify-center mr-5 shadow-sm">
                <Phone className="text-rose-500" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-700 mb-1">Phone</div>
                <p className="text-rose-500">+62 878 0391 5788</p>
              </div>
            </div>
          </div>

          {/* Available Banner */}
          <div
            id="available-banner"
            className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center opacity-0 transform translate-y-4 transition-all duration-700"
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-4 animate-pulse"></div>
            <p className="text-emerald-800">
              <span className="font-medium">Available for new projects</span> —
              Currently accepting new clients and collaborations
            </p>
          </div>

          {/* Additional Decorative Elements */}
          <div className="absolute top-1/4 right-4 w-3 h-3 bg-rose-300 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 right-8 w-2 h-2 bg-rose-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 right-6 w-4 h-4 bg-rose-300 rounded-full opacity-30"></div>

          <div className="absolute bottom-1/4 left-4 w-3 h-3 bg-rose-300 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 left-8 w-2 h-2 bg-rose-400 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/2 left-6 w-4 h-4 bg-rose-300 rounded-full opacity-30"></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -top-10 left-1/3 transform -translate-x-1/2 w-24 h-24 text-rose-100 opacity-30 rotate-12">
          <Heart fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-10 transform w-16 h-16 text-rose-100 opacity-30 -rotate-12">
          <Heart fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
