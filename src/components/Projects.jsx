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
      github: "https://github.com/SimretN/u09-fullstack-js-SimretN",
      live: "https://fabiestate.netlify.app",
    },
    {
      title: "Soundwave Creators",
      image: soundwaveImg,
      description:
        "A music-focused web application created as a school project with a modern interface and interactive music-related features.",
      technologies: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/SimretN/u08-business-idea-soundwave-creators",
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
    <section id="projects" className="bg-gray-50 px-5 py-14 sm:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Projects
          </h2>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            A selection of applications I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="
                    h-48
                    w-full
                    object-cover
                    transition
                    duration-300
                    hover:scale-105
                    sm:h-52
                  "
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Project Title */}
                <h3 className="mb-3 text-center text-xl font-bold text-gray-900 md:text-2xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-left text-sm leading-7 text-gray-600 md:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        bg-purple-100
                        px-3
                        py-1
                        text-xs
                        text-purple-700
                        sm:text-sm
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-purple-600
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-purple-700
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
                      rounded-lg
                      border
                      border-gray-300
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      transition
                      hover:border-purple-600
                      hover:text-purple-600
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
