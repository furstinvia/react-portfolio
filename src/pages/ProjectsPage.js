// src/pages/ProjectsPage.js
import React, { useState, useEffect } from "react";
import { X, ExternalLink, Code, Layout, Star } from "lucide-react";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Animation for elements
    const animateElements = () => {
      const title = document.getElementById("projects-title");
      const subtitle = document.getElementById("projects-subtitle");
      const cards = document.querySelectorAll(".project-card");
      const particles = document.querySelectorAll(".project-particle");
      const stars = document.querySelectorAll(".floating-star");

      if (title && subtitle) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";

        setTimeout(() => {
          subtitle.style.opacity = "1";
          subtitle.style.transform = "translateY(0)";
        }, 300);
      }

      // Animate cards with staggered delay
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 400 + index * 150);
      });

      // Animate particles with staggered delay
      particles.forEach((particle, index) => {
        setTimeout(() => {
          particle.style.opacity = "0.7";
          particle.style.transform = "translateY(0) scale(1)";
        }, 800 + index * 100);
      });

      // Animate stars with staggered delay
      stars.forEach((star, index) => {
        setTimeout(() => {
          star.style.opacity = "0.6";
          star.style.transform = "translateY(0) rotate(0deg)";
        }, 1000 + index * 150);
      });

      setIsLoading(false);
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

  const projects = [
    {
      id: 1,
      title: "IKEA Web System",
      description:
        "A fully functional web-based IKEA store system with intuitive dashboards for both cashier and admin roles.",
      image: "/images/ikeaweb.jpg",
      technologies: ["Laravel", "Bootstrap", "MySQL", "PHP"],
      tags: ["web app", "fullstack"],
      link: "https://github.com/furstinvia/PBKK-Laravel-Project/tree/main/tugas5",
      detailed:
        "I built a web-based IKEA retail system with cashier and admin dashboards to manage products, orders, and inventory. Using Laravel, Bootstrap, and MySQL, I implemented secure login, CRUD operations, and role-based access. This project showcases my skills in building responsive, user-friendly systems with solid backend logic.",
    },
    {
      id: 2,
      title: "Movie Ticket Platform",
      description:
        "A modern and responsive movie ticket booking platform with a dynamic user flow and admin dashboard.",
      image: "/images/film.jpg",
      technologies: ["Vue.js", "Express.js", "MySQL"],
      tags: ["web app", "fullstack", "ticketing system"],
      link: "https://github.com/furstinvia/PBKK-Express.git",
      detailed:
        "I built a movie ticket booking platform using Vue.js and Express.js, allowing users to explore films and buy tickets through a responsive UI. It includes an admin dashboard to manage movies and bookings. Key features include genre filtering, dynamic sliders, user authentication, and ticket transactions — showcasing my fullstack skills and clean data handling.",
    },
    {
      id: 3,
      title: "IKEA-Inspired E-Commerce Platform",
      description:
        "A fictional IKEA-style e-commerce site built with Vue.js, featuring curated product sections and a responsive shopping experience.",
      image: "/images/ikea.jpg",
      technologies: ["Vue.js", "Javascript", "CSS3", "HTML5"],
      tags: ["frontend", "ecommerce"],
      link: "https://github.com/furstinvia/PBKK-Laravel-Project/tree/main/tugas6",
      detailed:
        "I built a fictional e-commerce platform using Vue.js to simulate an IKEA-style store, featuring product listings, a shopping cart, and curated sections. As the frontend developer, I focused on reusable components, clean layouts, and responsive design for seamless navigation. This project showcases my ability to create engaging, user-centered UIs with modern frameworks.",
    },
    {
      id: 4,
      title: "Website Soko Financial",
      description:
        "I developed the Finance Calculator for the Soko Financial website, translating Figma designs into responsive, functional web pages using Laravel.",
      image: "/images/soko.jpg",
      technologies: ["Laravel", "Blade Templating", "CSS3", "JavaScript"],
      tags: ["web app", "frontend"],
      link: "https://sokofinancialedu.com",
      detailed:
        "As the Frontend Developer, I built the Finance Calculator for the Soko Financial website, including core pages like Dashboard, Budget Input, and PDF Export. I implemented dynamic forms and real-time calculations for a smooth user experience, using Laravel Blade for performance and responsiveness across devices. This tool helps users track and compare finances, simplifying budgeting goals.",
    },
    {
      id: 5,
      title: "Powerpuff Recipe App",
      description:
        "A fullstack web app built with Next.js and TypeScript, Powerpuff Recipe allows users to explore, save, and manage cooking recipes with a dynamic, responsive interface.",
      image: "/images/resep.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
      tags: ["fullstack", "web app", "recipe platform"],
      link: "https://github.com/furstinvia/PBKK-Powerpuff-Recipe-App.git",
      detailed:
        "I developed Powerpuff Recipe as a fullstack app using Next.js, TypeScript, and MySQL. Users can browse, favorite, and search recipes, while admins manage content through a dashboard. I implemented server-side rendering, dynamic routing, and CRUD functionality, with a responsive dark theme styled using Tailwind CSS.",
    },
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const tags = ["all", ...new Set(projects.flatMap((project) => project.tags))];

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full opacity-20 blur-3xl transform -translate-y-1/3 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full opacity-20 blur-3xl transform translate-y-1/3 -translate-x-1/4"></div>

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
      <div className="absolute top-1/4 right-1/5 w-4 h-4 bg-rose-200 rounded-full project-particle opacity-0 transform translate-y-8 scale-0 transition-all duration-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-rose-300 rounded-full project-particle opacity-0 transform translate-y-8 scale-0 transition-all duration-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-rose-100 rounded-full project-particle opacity-0 transform translate-y-8 scale-0 transition-all duration-1000"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h1
            id="projects-title"
            className="text-5xl font-bold text-rose-900 mb-4 font-serif relative inline-block opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            My Projects
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <div
              className="absolute -right-8 -top-8 w-6 h-6 text-rose-300 opacity-70 project-particle"
              style={{ animationDelay: "0.5s" }}
            >
              <Star fill="currentColor" />
            </div>
          </h1>
          <p
            id="projects-subtitle"
            className="text-rose-700 max-w-3xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            Here are some of the projects I've worked on. Each one represents
            different challenges and solutions in frontend development. Click on
            a project to learn more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer opacity-0 transform translate-y-12 duration-500"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative group overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                  <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Number Badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-rose-600 font-bold shadow-sm">
                  {project.id}
                </div>
              </div>

              <div className="p-6 border-t border-rose-50">
                <h3 className="text-xl font-bold text-rose-800 mb-2 font-serif">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-rose-50 text-rose-600 text-xs px-2 py-1 rounded-full capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 border-2 border-white"
                        title={tech}
                      >
                        {tech.charAt(0)}
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <div className="w-8 h-8 rounded-full bg-rose-200 flex items-center justify-center text-rose-700 border-2 border-white">
                        +{project.technologies.length - 3}
                      </div>
                    )}
                  </div>

                  <button className="text-rose-500 hover:text-rose-600 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
                    Details
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="mt-20 text-center bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl p-10 shadow-md">
          <h3 className="text-2xl font-bold text-rose-800 mb-3 font-serif">
            Interested in Working Together?
          </h3>
          <p className="text-rose-700 mb-6 max-w-2xl mx-auto">
            I'm always open to new projects and collaborations. Let's create
            something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={closeProjectDetails}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h2 className="text-3xl font-bold mb-2 font-serif">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-rose-800 mb-3 flex items-center">
                  <Layout size={18} className="mr-2 text-rose-500" />
                  Project Overview
                </h3>
                <p className="text-gray-700">{selectedProject.detailed}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-rose-800 mb-3 flex items-center">
                  <Code size={18} className="mr-2 text-rose-500" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-gray-500 text-sm">
                  Project #{selectedProject.id}
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <span>Visit Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
