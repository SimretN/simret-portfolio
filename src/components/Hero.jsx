import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/profile/simret-profile.jpg";

function Hero() {
  return (
    <section id="home" className="px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
        {/* Left side - Text */}
        <div className="md:w-[58%] text-center md:text-left">
          <p className="text-purple-600 font-semibold mb-4">
            Hello, I'm Simret 👋
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 md:whitespace-nowrap">
            Full-Stack Web Developer
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="/Simret-Negash-CV-English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              View CV
            </a>

            <a
              href="#contact"
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-800 hover:border-purple-600 hover:text-purple-600 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://github.com/SimretN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/simret-negash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-purple-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <div className="md:w-[42%] flex justify-center">
          <div className="relative">
            {/* Purple background decoration */}
            <div className="absolute -inset-3 bg-purple-100 rounded-3xl rotate-3"></div>

            <img
              src={profileImage}
              alt="Simret Negash"
              className="
                relative
                w-52 h-64
                sm:w-56 sm:h-72
                md:w-64 md:h-80
                lg:w-72 lg:h-80
                object-cover
                rounded-3xl
                shadow-lg
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
