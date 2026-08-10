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
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "C#", icon: <SiSharp /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-purple-600 font-semibold mb-3">
          My Skills
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Technologies I work with
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="text-4xl text-purple-600">
                {skill.icon}
              </div>

              <p className="font-medium text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;