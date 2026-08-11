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
        "A music-focused web application created as a school project, with a modern interface and interactive music-related features.",
      technologies: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/SimretN",
      live: "https://soundwavecreators.netlify.app",
    },
    {
      title: "Recipe App",
      image: recipeImg,
      description:
        "An Angular recipe application where users can search recipes by meal type and cuisine, with login and signup functionality.",
      technologies: ["Angular", "TypeScript", "API"],
      github: "https://github.com/SimretN/u06-fullstack-recipe-app-SimretN",
      live: "https://gilded-pothos-52d739.netlify.app",
    },
    {
      title: "Weather App",
      image: weatherImg,
      description:
        "A weather application that displays weather information in a clean and responsive interface.",
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
        "A responsive static webpage created to practice semantic HTML, CSS styling and webpage structure.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/SimretN/static-webpage-SimretN",
      live: "https://dashing-youtiao-d613a4.netlify.app",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-3">
            My Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Some of my work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
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