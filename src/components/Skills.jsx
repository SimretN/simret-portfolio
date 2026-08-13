import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAngular,
  FaPhp,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiSharp,
} from "react-icons/si";

function Skills() {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Angular", icon: <FaAngular /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "C#", icon: <SiSharp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "PHP", icon: <FaPhp /> },
  ];

  const databaseTools = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const SkillCard = ({ skill }) => (
    <div className="flex flex-col items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-5 md:py-6 hover:shadow-md hover:-translate-y-1 transition duration-300">
      <div className="text-3xl md:text-4xl text-purple-600">{skill.icon}</div>

      <p className="text-sm md:text-base font-medium text-gray-700">
        {skill.name}
      </p>
    </div>
  );

  return (
    <section id="skills" className="px-5 sm:px-6 py-14 md:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Skills
          </h2>

          <p className="text-gray-500 text-sm md:text-base">
            Technologies I work with
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
              Frontend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {frontend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
              Backend
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {backend.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Database & Tools */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 text-center">
              Database & Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {databaseTools.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
