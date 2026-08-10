import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-purple-600 font-semibold mb-4">
          Hello, I'm Simret 👋
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Full-Stack Developer
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          I build modern, responsive web applications using JavaScript,
          React, Node.js and other modern web technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-800 hover:border-purple-600 hover:text-purple-600 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-5 text-2xl">
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
            href="#"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-purple-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;