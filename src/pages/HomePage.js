
// src/pages/HomePage.js - Update untuk section banner
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Animasi untuk text header dan elemen lain
    const animateElements = () => {
      const title = document.getElementById("animated-title");
      const subtitle = document.getElementById("animated-subtitle");
      const highlight = document.getElementById("animated-highlight");
      const particles = document.querySelectorAll(".particle");

      if (title && subtitle) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";

        setTimeout(() => {
          subtitle.style.opacity = "1";
          subtitle.style.transform = "translateY(0)";
        }, 500);

        if (highlight) {
          setTimeout(() => {
            highlight.style.width = "180px";
            highlight.style.opacity = "1";
          }, 1000);
        }

        // Animate particles with staggered delay
        particles.forEach((particle, index) => {
          setTimeout(() => {
            particle.style.opacity = "1";
            particle.style.transform = "translateY(0) scale(1)";
          }, 1000 + index * 100);
        });
      }
    };

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stars = document.querySelectorAll(".star");
      const title = document.getElementById("animated-title");

      stars.forEach((star, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        star.style.transform = `translateY(${scrollY * speed}px)`;
      });

      if (title) {
        title.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    // Jalankan animasi dan set up event listeners
    animateElements();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Banner with Dynamic Elements - Full Height */}
      <div className="relative bg-gradient-to-br from-rose-50 to-rose-200 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background dynamic particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Creative shape 1 */}
          <div
            className="particle absolute top-[10%] right-[10%] w-64 h-64 bg-rose-300 rounded-full opacity-0 blur-3xl transition-all duration-1000 transform translate-y-8 scale-95"
            style={{ animationDelay: "0.2s" }}
          ></div>
          {/* Creative shape 2 */}
          <div
            className="particle absolute bottom-[15%] left-[15%] w-72 h-72 bg-rose-200 rounded-full opacity-0 blur-3xl transition-all duration-1000 transform translate-y-8 scale-95"
            style={{ animationDelay: "0.5s" }}
          ></div>
          {/* Creative shape 3 */}
          <div
            className="particle absolute top-[40%] left-[5%] w-48 h-48 bg-rose-100 rounded-full opacity-0 blur-3xl transition-all duration-1000 transform translate-y-8 scale-95"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 text-center relative z-10 py-24">
          {/* Animated Title tanpa highlight */}
          <div className="relative inline-block">
            <h1
              id="animated-title"
              className="text-6xl md:text-8xl font-bold text-rose-800 mb-8 font-serif leading-tight transition-all duration-1000 ease-out opacity-0 transform translate-y-8"
            >
              Hi. I'm Via.
              <br />
              <span className="relative inline-block">
                A Developer<span className="text-rose-500">.</span>
              </span>
            </h1>
          </div>
          <p
            id="animated-subtitle"
            className="text-xl md:text-2xl text-rose-700 max-w-2xl mx-auto mb-12 transition-all duration-1000 ease-out delay-500 opacity-0 transform translate-y-8"
          >
            I'm a Informatics Engineering student at ITS Surabaya with a passion
            for creating web experiences that are engaging, accessible, and
            user-centric.
          </p>

          {/* CTA Button with glowing effect */}
          {/* CTA Button with soft pink color */}
          <div className="mt-8 relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-rose-300 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="#content"
              className="relative bg-rose-200 hover:bg-rose-300 text-rose-700 px-8 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center"
            >
              <span className="mr-2">Explore My Work</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </a>
          </div>
          {/* Tech Icons floating subtly */}
          <div className="absolute bottom-32 left-[15%] text-rose-300 opacity-30 animate-float-slow">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm16.616 6.63l-.471-.119a23.725 23.725 0 00-3.787-.61l-.234-.02-.135-.193a23.706 23.706 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.856l-.133.468zM14.128 7.36a25.24 25.24 0 013.234.501c.684-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.66 24.66 0 0114.128 7.36zM12 8.997c.66 0 1.319.062 1.961.184l.235.02.135.193a24.204 24.204 0 011.979 3.432c.029.059.049.076.049.076a24.225 24.225 0 01-1.979 3.432l-.135.193-.235.02a24.177 24.177 0 01-3.921 0l-.234-.02-.136-.193a24.183 24.183 0 01-1.978-3.432c-.01-.02-.02-.036-.028-.054-.01-.019-.02-.036-.028-.054a24.152 24.152 0 011.979-3.432l.134-.193.235-.02a24.14 24.14 0 011.961-.184z" />
            </svg>
          </div>
          <div className="absolute top-40 right-[20%] text-rose-300 opacity-20 animate-float">
            <svg
              className="w-20 h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.396.435-.79.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
            </svg>
          </div>

          {/* Decorative Stars with Parallax Effect */}
          <div className="star absolute top-[15%] right-[15%] w-8 h-8 text-rose-300 opacity-60">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="star absolute bottom-[30%] left-[20%] w-12 h-12 text-rose-300 opacity-50">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="star absolute top-[35%] left-[8%] w-6 h-6 text-rose-300 opacity-40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Wave Divider - Top Banner to Hero Section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-[60px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff1f2" /* rose-50 color - match to your first section */
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,56C672,48,768,32,864,26.7C960,21,1056,27,1152,32C1248,37,1344,43,1392,45.3L1440,48L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Rest of the code remains unchanged... */}
      {/* Original Hero Section - Now with Stars */}
      {/* Section Kedua - Personality Section dengan Desain yang Ditingkatkan */}
      <div id="content" className="bg-rose-50 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full opacity-50 blur-3xl transform -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100 rounded-full opacity-40 blur-3xl transform translate-y-1/4 -translate-x-1/4"></div>

        {/* Decorative Floating Elements */}
        <div className="absolute left-[5%] top-[20%] w-8 h-8 text-rose-300 opacity-30 animate-float-slow">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-[8%] bottom-[15%] w-6 h-6 text-rose-400 opacity-20 animate-float">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" rx="20" fill="currentColor" />
          </svg>
        </div>
        <div
          className="absolute right-[20%] top-[10%] w-4 h-4 text-rose-500 opacity-25 animate-float-slow"
          style={{ animationDelay: "1s" }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="50,0 100,100 0,100" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Content Section dengan Efek Reveal saat Scroll */}
            <div className="md:w-3/5 mb-8 md:mb-0 relative">
              {/* Highlighted Title */}
              <div className="relative inline-block mb-3">
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 h-12 w-2 bg-rose-400 rounded-full"></div>
                <h1 className="text-4xl md:text-5xl font-bold text-rose-900 font-serif leading-tight">
                  Furstin
                  <br />
                  Aprilavia Putri
                  <br />
                </h1>
              </div>

              {/* Description with Custom Styling */}
              <p className="text-gray-700 mb-8 text-lg leading-relaxed relative">
                <span className="text-rose-600 font-medium">
                  Frontend Developer
                </span>{" "}
                passionate about crafting beautiful, responsive interfaces and,
                lately, diving into data to make those experiences smarter and
                more impactful.
              </p>

              {/* Enhanced Buttons with Animation */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="group bg-rose-400 hover:bg-rose-500 text-white px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-1"
                >
                  <span className="mr-2">Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
                <Link
                  to="/projects"
                  className="group bg-white border-2 border-rose-300 text-rose-500 hover:text-rose-600 hover:border-rose-400 px-7 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center transform hover:-translate-y-1"
                >
                  <Briefcase
                    size={18}
                    className="mr-2 transition-all duration-300 group-hover:scale-110"
                  />
                  <span>Projects</span>
                </Link>
              </div>

              {/* Skill Badges */}
              <div className="mt-10 flex flex-wrap gap-2">
                <span className="text-sm bg-white px-3 py-1 rounded-full text-rose-600 shadow-sm border border-rose-100">
                  React
                </span>
                <span className="text-sm bg-white px-3 py-1 rounded-full text-rose-600 shadow-sm border border-rose-100">
                  JavaScript
                </span>
                <span className="text-sm bg-white px-3 py-1 rounded-full text-rose-600 shadow-sm border border-rose-100">
                  Tailwind CSS
                </span>
                <span className="text-sm bg-white px-3 py-1 rounded-full text-rose-600 shadow-sm border border-rose-100">
                  Laravel
                </span>
              </div>
            </div>

            {/* Foto bagian kanan - Dengan Styling yang Dioptimalkan untuk Mobile */}
            <div className="md:w-2/5 relative w-full px-4">
              <div className="mx-auto max-w-xs md:max-w-md">
                {/* Card-like Frame with Shadows */}
                <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-[0_20px_50px_rgba(244,114,182,0.2)]">
                  {/* Image Frame - Modified for better mobile display */}
                  <div className="relative rounded-xl overflow-hidden">
                    {/* Fixed height for mobile, aspect ratio for larger screens */}
                    <div className="h-80 md:h-auto md:pb-[125%] relative">
                      <img
                        src="/images/fotoviaa.jpg"
                        alt="Portrait"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
                      />
                    </div>

                    {/* Overlay Gradient at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 h-3 w-3 bg-rose-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute bottom-4 left-4 h-3 w-3 bg-rose-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>

                  {/* Decorative Corner Cuts */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-rose-50">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-tl-lg"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-rose-50">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-white rounded-br-lg"></div>
                  </div>
                </div>

                {/* Decorative Elements Around Image */}
                <div className="absolute -bottom-3 -right-3 h-20 w-20 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full -z-10 opacity-80"></div>
                <div className="absolute -top-3 -left-3 h-16 w-16 bg-gradient-to-tr from-rose-300 to-rose-200 rounded-full -z-10 opacity-70"></div>

                {/* Vertical Dots */}
                <div className="absolute top-1/2 transform -translate-y-1/2 -right-5 hidden md:flex flex-col gap-2">
                  <div className="h-2 w-2 bg-rose-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-rose-400 rounded-full"></div>
                  <div className="h-2 w-2 bg-rose-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider - Sangat Tipis */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-[30px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Section 3: Statistics - Enhanced with animations and interactions */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Hapus wave divider atas yang duplikat */}

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-rose-50/10 to-transparent"></div>
        <div className="absolute -right-24 top-1/3 w-48 h-48 bg-rose-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -left-24 bottom-1/3 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-60"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 right-1/5 w-3 h-3 bg-rose-200 rounded-full animate-float opacity-60"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-rose-300 rounded-full animate-float-slow opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-rose-300 rounded-full animate-float-slow opacity-50"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Heading with Decorative Lines */}
          <div className="relative mb-16 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-10 bg-rose-300"></div>
              <h2 className="text-4xl font-bold text-rose-900 font-serif px-6">
                Welcome To My Portfolio
              </h2>
              <div className="h-[1px] w-10 bg-rose-300"></div>
            </div>

            {/* Subtle Subtitle */}
            <p className="text-rose-600 max-w-lg mx-auto text-center">
              A showcase of my skills, achievements, and journey
            </p>
          </div>

          {/* Enhanced Statistics Cards with Animation */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-white to-rose-50 shadow-lg hover:shadow-xl p-8 rounded-2xl w-full md:w-1/4 transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-rose-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Number Counter (simulated with CSS) */}
              <div className="relative">
                <span className="block text-5xl font-bold text-rose-500 mb-2 font-serif counter-anim">
                  2+
                </span>
                <span className="text-gray-600 font-medium">
                  Years Experience
                </span>

                {/* Icon */}
                <div className="absolute -top-2 right-0 text-rose-200 opacity-40 transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-white to-rose-50 shadow-lg hover:shadow-xl p-8 rounded-2xl w-full md:w-1/4 transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-rose-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Number Counter */}
              <div className="relative">
                <span className="block text-5xl font-bold text-rose-800 mb-2 font-serif counter-anim">
                  5+
                </span>
                <span className="text-gray-600 font-medium">
                  Projects Completed
                </span>

                {/* Icon */}
                <div className="absolute -top-2 right-0 text-rose-200 opacity-40 transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-white to-rose-50 shadow-lg hover:shadow-xl p-8 rounded-2xl w-full md:w-1/4 transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-rose-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Number Counter */}
              <div className="relative">
                <span className="block text-5xl font-bold text-rose-600 mb-2 font-serif counter-anim">
                  6+
                </span>
                <span className="text-gray-600 font-medium">Technologies</span>

                {/* Icon */}
                <div className="absolute -top-2 right-0 text-rose-200 opacity-40 transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider - Enhanced */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-[60px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff1f2" /* rose-50 color for next section */
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1200,120,1040,120C880,120,720,120,560,120C400,120,240,120,160,120L80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Section 4: What I Can Offer - Modern and Interactive */}
      <div className="bg-rose-50 py-24 relative overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none">
          <div className="col-start-1 col-span-2 row-start-1 row-span-3 bg-rose-100 opacity-10 blur-3xl rounded-full"></div>
          <div className="col-start-9 col-span-2 row-start-2 row-span-3 bg-rose-200 opacity-20 blur-3xl rounded-full"></div>
          <div className="col-start-3 col-span-2 row-start-8 row-span-3 bg-rose-100 opacity-10 blur-3xl rounded-full"></div>
          <div className="col-start-8 col-span-2 row-start-7 row-span-3 bg-rose-200 opacity-15 blur-3xl rounded-full"></div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 left-10 w-8 h-8 text-rose-200 opacity-30 animate-float-slow">
          <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
        </div>
        <div
          className="absolute bottom-20 right-10 w-6 h-6 text-rose-300 opacity-30 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Title with Animation */}
          <div className="relative mb-20 text-center">
            <h2 className="text-4xl font-bold text-rose-900 font-serif inline-block relative">
              What I Can Offer
              <span className="absolute -bottom-4 left-0 right-0 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></span>
            </h2>
            <p className="text-rose-700 mt-6 max-w-lg mx-auto">
              Making the web look good (and work great).
            </p>
          </div>

          {/* Modern Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Problem Solving */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Card Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300 to-rose-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon with Hover Animation */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-rose-50 text-rose-500 mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif group-hover:text-rose-700 transition-colors duration-300">
                  Problem Solving
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Efficiently finding solutions to complex frontend challenges.
                </p>
              </div>
            </div>

            {/* Card 2: Responsive Design */}
            <div className="group relative bg-rose-400 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Card Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon with Hover Animation */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 text-white mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                  Responsive Design
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Creating beautiful interfaces for all devices and screen
                  sizes.
                </p>
              </div>
            </div>

            {/* Card 3: Fast Performance */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Card Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300 to-rose-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon with Hover Animation */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-rose-50 text-rose-500 mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
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

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif group-hover:text-rose-700 transition-colors duration-300">
                  Fast Performance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimizing for speed and efficiency in all projects.
                </p>
              </div>
            </div>

            {/* Card 4: Growth & Learning */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Card Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300 to-rose-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon with Hover Animation */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-rose-50 text-rose-500 mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-serif group-hover:text-rose-700 transition-colors duration-300">
                  Growth & Learning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Constantly improving skills and learning new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider - Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-[30px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,48C672,43,768,53,864,53.3C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Section 5: Check Out My Latest Work - Enhanced Project Gallery */}
      <div className="bg-white py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern"></div>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-rose-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-rose-50 rounded-full opacity-20 blur-3xl"></div>

        {/* Decorative Stars */}
        <div className="absolute top-[20%] right-[10%] w-5 h-5 text-rose-300 opacity-30 animate-float-slow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-[30%] left-[5%] w-6 h-6 text-rose-200 opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.6 8.2L21.4 8.4L16 12.9L17.8 19.4L12 16L6.2 19.4L8 12.9L2.6 8.4L9.4 8.2L12 2Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header with Creative Style */}
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h2 className="text-4xl font-bold text-rose-900 font-serif relative z-10">
                Check Out My Latest Work
              </h2>
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <div className="absolute -left-6 -top-6 w-12 h-12 text-rose-200 opacity-20 rotate-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
            </div>
            <p className="text-rose-700 mt-6 max-w-xl mx-auto">
              A snapshot of what I’ve been creating recently.
            </p>
          </div>

          {/* Featured Projects - Modern Cards with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Project Card 1 */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-64">
                <img
                  src="/images/ikeaweb.jpg"
                  alt="IKEA Web System"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-lg font-bold mb-1">
                      IKEA Web System
                    </h4>
                    <p className="text-sm text-white/90">
                      Laravel, Bootstrap, MYSQL, PHP
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                    IKEA Web System
                  </h3>
                  <span className="bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">
                    Web App
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                A fully functional web-based IKEA store system with intuitive dashboards for both cashier and admin roles.
                </p>

                {/* CTA Button */}
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                  Laravel, Bootstrap, MYSQL, PHP
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-64">
                <img
                  src="/images/film.jpg"
                  alt="Movie Ticket Platform"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-lg font-bold mb-1">
                      Movie Ticket Platform
                    </h4>
                    <p className="text-sm text-white/90">
                      Vue.js, Express.js, MySQL
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                  Movie Ticket Platform
                  </h3>
                  <span className="bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">
                    Web App
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                A modern and responsive movie ticket booking platform with a dynamic user flow and admin dashboard.
                </p>

                {/* CTA Button */}
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Vue.js, Express.js, MySQL</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-64">
                <img
                  src="/images/ikea.jpg"
                  alt="IKEA-Inspired E-Commerce Platform"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-lg font-bold mb-1">
                    IKEA-Inspired E-Commerce Platform
                    </h4>
                    <p className="text-sm text-white/90">
                      Vue.js, Javascript, CSS3, HTML5
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 font-serif">
                  IKEA-Inspired E-Commerce Platform
                  </h3>
                  <span className="bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full">
                    Website
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                A fictional IKEA-style e-commerce site built with Vue.js, featuring curated product sections and a responsive shopping experience.
                </p>

                {/* CTA Button */}
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Vue.js, Javascript, CSS3, HTML5</span>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects Button - Enhanced */}
          <div className="text-center">
            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium bg-rose-400 text-white rounded-full transition-all duration-300 ease-out hover:shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-700 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative flex items-center gap-2">
                View All Projects
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
