// src/pages/AboutPage.js
import React, { useEffect } from "react";
import { Star } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Animation for stars and elements
    const animateElements = () => {
      const title = document.getElementById("about-title");
      const subtitle = document.getElementById("about-subtitle");
      const particles = document.querySelectorAll(".about-particle");
      const stars = document.querySelectorAll(".floating-star");

      if (title && subtitle) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";

        setTimeout(() => {
          subtitle.style.opacity = "1";
          subtitle.style.transform = "translateY(0)";
        }, 300);
      }

      // Animate particles with staggered delay
      particles.forEach((particle, index) => {
        setTimeout(() => {
          particle.style.opacity = "1";
          particle.style.transform = "translateY(0) scale(1)";
        }, 600 + index * 100);
      });

      // Animate stars with staggered delay
      stars.forEach((star, index) => {
        setTimeout(() => {
          star.style.opacity = "0.6";
          star.style.transform = "translateY(0) rotate(0deg)";
        }, 800 + index * 150);
      });
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stars = document.querySelectorAll(".floating-star");
      const profileImage = document.getElementById("profile-image");

      stars.forEach((star, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        star.style.transform = `translateY(${scrollY * speed}px) rotate(${
          scrollY * 0.05
        }deg)`;
      });

      if (profileImage) {
        profileImage.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    // Run animations and set up event listeners
    animateElements();
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

      <div className="container mx-auto px-4 py-12">
        {/* Animated Title Section */}
        <div className="text-center mb-16 relative">
          <h1
            id="about-title"
            className="text-5xl md:text-6xl font-bold text-rose-900 mb-4 font-serif relative inline-block opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            About Me
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          </h1>
          <p
            id="about-subtitle"
            className="text-rose-600 text-xl max-w-2xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            Passionate about creating beautiful, responsive, and user-friendly
            web experiences
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
          {/* Profile Image with Enhanced Styling */}
          <div className="md:w-1/2 relative mb-8 md:mb-0 group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 rounded-3xl transform rotate-3 scale-95 opacity-70 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500"></div>

            <div
              className="rounded-3xl overflow-hidden relative z-10 transform group-hover:scale-105 transition-all duration-500"
              id="profile-image"
            >
              <img
                src="/images/fotoviaaa.jpg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-3 -right-3 h-6 w-6 bg-rose-300 rounded-full animate-pulse z-20"></div>
            <div
              className="absolute -top-3 -left-3 h-6 w-6 bg-rose-400 rounded-full animate-pulse z-20"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Floating Circles */}
            <div className="absolute -top-6 right-12 h-4 w-4 bg-rose-200 rounded-full about-particle opacity-0 transform translate-y-8 scale-95 transition-all duration-1000"></div>
            <div className="absolute bottom-12 -left-5 h-3 w-3 bg-rose-300 rounded-full about-particle opacity-0 transform translate-y-8 scale-95 transition-all duration-1000"></div>

            {/* Star Accent */}
            <div className="absolute bottom-4 right-8 text-rose-400 opacity-0 about-particle transform translate-y-8 scale-95 transition-all duration-1000">
              <Star size={24} fill="currentColor" className="animate-pulse" />
            </div>
          </div>

          {/* About Content with Enhanced Styling */}
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300 rounded-full"></div>

              <h2 className="text-3xl font-bold text-rose-900 mb-6 font-serif relative inline-block">
                Hi, I'm Furstin Aprilavia Putri!
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-400 to-transparent"></div>
              </h2>

              <p
                className="text-gray-700 mb-4 about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
                style={{ transitionDelay: "200ms" }}
              >
                I’m a 6th-semester student in Informatics Engineering at ITS
                Surabaya with a strong passion for{" "}
                <span className="text-rose-600 font-medium">
                  Frontend development.
                </span>{" "}
                I’ve been honing my skills in building responsive and visually
                engaging websites, striving to create seamless user experiences.
                My interest in web development has led me to explore various
                technologies to craft intuitive and functional digital
                interfaces.
              </p>

              <p
                className="text-gray-700 mb-6 about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
                style={{ transitionDelay: "400ms" }}
              >
                In addition to my love for frontend development, I’m currently
                diving into the world of data science, combining my technical
                knowledge with a growing curiosity to turn data into meaningful
                insights. My journey is all about learning, evolving, and
                creating web experiences that are not just aesthetically
                pleasing but also intelligent and user-centered.
              </p>

              {/* Enhanced Education Section */}
              <div
                className="mb-8 about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
                style={{ transitionDelay: "600ms" }}
              >
                <h3 className="text-xl font-semibold text-rose-700 mb-3 flex items-center">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4 text-rose-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  Education
                </h3>

                <div className="bg-white rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-rose-300 group">
                  <div className="font-medium group-hover:text-rose-700 transition-colors duration-300">
                    Undergraduate in Informatics Engineering
                  </div>
                  <div className="text-gray-600">
                    Institut Teknologi Sepuluh Nopember, 2022-Present
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-rose-300 group">
                  <div className="font-medium group-hover:text-rose-700 transition-colors duration-300">
                    Senior High School
                  </div>
                  <div className="text-gray-600">
                    SMAN 7 Surakarta, 2019-2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Certifications with Enhanced UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative">
          {/* Skills Section */}
          <div
            className="about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center mr-3 shadow-md">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-rose-800 font-serif">
                Skills
              </h2>
            </div>

            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium group-hover:text-rose-600 transition-colors duration-300">
                    HTML & CSS
                  </span>
                  <span className="text-rose-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-300 to-rose-500 h-2 rounded-full transform origin-left transition-transform duration-1000 scale-x-0"
                    style={{
                      width: "95%",
                      animationDelay: "1s",
                      transform: "scaleX(1)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium group-hover:text-rose-600 transition-colors duration-300">
                    React
                  </span>
                  <span className="text-rose-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-300 to-rose-500 h-2 rounded-full transform origin-left transition-transform duration-1000 scale-x-0"
                    style={{
                      width: "90%",
                      animationDelay: "1.2s",
                      transform: "scaleX(1)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium group-hover:text-rose-600 transition-colors duration-300">
                    Tailwind CSS
                  </span>
                  <span className="text-rose-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-300 to-rose-500 h-2 rounded-full transform origin-left transition-transform duration-1000 scale-x-0"
                    style={{
                      width: "85%",
                      animationDelay: "1.4s",
                      transform: "scaleX(1)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium group-hover:text-rose-600 transition-colors duration-300">
                    Laravel
                  </span>
                  <span className="text-rose-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-300 to-rose-500 h-2 rounded-full transform origin-left transition-transform duration-1000 scale-x-0"
                    style={{
                      width: "88%",
                      animationDelay: "1.6s",
                      transform: "scaleX(1)",
                    }}
                  ></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium group-hover:text-rose-600 transition-colors duration-300">
                    Python
                  </span>
                  <span className="text-rose-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-300 to-rose-500 h-2 rounded-full transform origin-left transition-transform duration-1000 scale-x-0"
                    style={{
                      width: "80%",
                      animationDelay: "1.8s",
                      transform: "scaleX(1)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Languages Section */}
          <div
            className="about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center mr-3 shadow-md">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-rose-800 font-serif">
                Certifications & Languages
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border-l-4 border-rose-300">
                <div className="font-medium group-hover:text-rose-700 transition-colors duration-300 flex items-center">
                  <Star size={16} className="mr-2 text-rose-400" />
                  Backend Development Fundamental
                </div>
                <div className="text-gray-600">MySkill, 2024</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border-l-4 border-rose-300">
                <div className="font-medium group-hover:text-rose-700 transition-colors duration-300 flex items-center">
                  <Star size={16} className="mr-2 text-rose-400" />
                  Bootcamp Machine Learning & AI
                </div>
                <div className="text-gray-600">DQLAB, 2025</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border-l-4 border-rose-300">
                <div className="font-medium group-hover:text-rose-700 transition-colors duration-300 flex items-center">
                  <Star size={16} className="mr-2 text-rose-400" />
                  Bootcamp Data Analyst with SQL & Python
                </div>
                <div className="text-gray-600">DQLAB, 2025</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-rose-700 mb-3 flex items-center">
              <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mr-2">
                <svg
                  className="w-4 h-4 text-rose-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l.8 9.1a1 1 0 01-1.99.2L7.2 5H5a1 1 0 110-2h2V3a1 1 0 011-1zm9.707 5.707a1 1 0 00-1.414 0L9.999 13.99 6.707 10.7a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              Languages
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                <span className="text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-rose-400 rounded-full mr-2"></span>
                  Bahasa Indonesia
                </span>
                <span className="text-rose-600 font-medium">Native</span>
              </div>
              <div className="flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-sm">
                <span className="text-gray-700 flex items-center">
                  <span className="w-3 h-3 bg-rose-400 rounded-full mr-2"></span>
                  English
                </span>
                <span className="text-rose-600 font-medium">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div
          className="mb-16 about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
          style={{ transitionDelay: "1400ms" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rose-900 font-serif inline-block relative">
              Beyond Coding
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            </h2>
            <p className="text-rose-600 mt-3">
              Things I'm passionate about outside of work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interest Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-rose-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg
                  className="w-24 h-24 text-rose-400 group-hover:scale-110 transition-transform duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Film/Movie icon */}
                  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm10-8h-6v8h6V7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-rose-800 mb-2">
                  Watching Movies
                </h3>
                <p className="text-gray-600">
                  I love watching movies from various genres, as they allow me
                  to unwind and experience different worlds.
                </p>
              </div>
            </div>

            {/* Interest Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-rose-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg
                  className="w-24 h-24 text-rose-400 group-hover:scale-110 transition-transform duration-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-rose-800 mb-2">
                  Traveling
                </h3>
                <p className="text-gray-600">
                  Exploring new places, cultures, and cuisines around the world.
                </p>
              </div>
            </div>

            {/* Interest Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-rose-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg
                  className="w-24 h-24 text-rose-400 group-hover:scale-110 transition-transform duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simple music note icon */}
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-rose-800 mb-2">Music</h3>
                <p className="text-gray-600">
                  I enjoy listening to music as a way to relax and boost my
                  mood.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          className="text-center about-particle opacity-0 transform translate-y-6 transition-all duration-1000"
          style={{ transitionDelay: "1600ms" }}
        >
          <div className="relative inline-block">
            <div className="absolute -top-6 -left-10 w-20 h-20 text-rose-200 opacity-30 rotate-12">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-rose-900 font-serif">
                Let's Work Together
              </h2>
              <p className="text-rose-600 mt-2">
                Have a project in mind or just want to connect?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-1"
            >
              <span className="mr-2">Get in Touch</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href="/projects"
              className="group bg-white border-2 border-rose-300 text-rose-500 hover:text-rose-600 hover:border-rose-400 px-8 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center transform hover:-translate-y-1"
            >
              <span className="mr-2">View My Work</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
