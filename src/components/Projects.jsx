import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import fabiestateImg from "../assets/projects/fabiestate.png";
import soundwaveImg from "../assets/projects/soundwave.png";
import recipeImg from "../assets/projects/recipe.png";
import weatherImg from "../assets/projects/weather.png";
import hangmanImg from "../assets/projects/hangman.png";
import staticWebpageImg from "../assets/projects/static-webpage.png";

function Projects() {
  const projects = [
    {
      title: "FabiEstate",
      image: fabiestateImg,
      description:
        "A full-stack real estate application where users can create accounts, manage property listings, upload images, search properties and contact landlords.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      github: "https://github.com/SimretN",
      live: "https://fabiestate.netlify.app",
    },
    {
      title: "Soundwave Creators",
      image: soundwaveImg,
      description:
        "A music-focused web application created as a school project with a modern interface and interactive music-related features.",
      technologies: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/SimretN",
      live: "https://soundwavecreators.netlify.app",
    },
    {
      title: "Recipe App",
      image: recipeImg,
      description:
        "An Angular recipe application where users can explore recipes by meal type and cuisine, with login and signup functionality.",
      technologies: ["Angular", "TypeScript", "API"],
      github: "https://github.com/SimretN/u06-fullstack-recipe-app-SimretN",
      live: "https://gilded-pothos-52d739.netlify.app",
    },
    {
      title: "Weather App",
      image: weatherImg,
      description:
        "A responsive weather application that displays weather information through a simple and user-friendly interface.",
      technologies: ["JavaScript", "API", "CSS"],
      github: "https://github.com/SimretN/u07-weather-app-SimretN",
      live: "https://fantastic-manatee-42b815.netlify.app",
    },
    {
      title: "Hangman Game",
      image: hangmanImg,
      description:
        "A browser-based Hangman game built with JavaScript, focusing on DOM manipulation, game logic and user interaction.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/SimretN/u03-js-hangman-SimretN",
      live: "https://warm-fairy-cc9850.netlify.app",
    },
    {
      title: "Static Webpage",
      image: staticWebpageImg,
      description:
        "A responsive static webpage created to practice semantic HTML, CSS styling and clean webpage structure.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/SimretN/static-webpage-SimretN",
      live: "https://dashing-youtiao-d613a4.netlify.app",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 px-5 sm:px-6 py-14 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Projects
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-2">
            A selection of applications I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition
                duration-300
                flex
                flex-col
              "
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="
                    w-full
                    h-48
                    sm:h-52
                    object-cover
                    hover:scale-105
                    transition
                    duration-300
                  "
                />
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-7 mb-5 text-left">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        text-xs
                        sm:text-sm
                        bg-purple-100
                        text-purple-700
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      bg-purple-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-medium
                      hover:bg-purple-700
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      border
                      border-gray-300
                      text-gray-700
                      px-4
                      py-2
                      rounded-lg
                      text-sm
                      font-medium
                      hover:border-purple-600
                      hover:text-purple-600
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
