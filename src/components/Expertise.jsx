import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiEclipseide,
  SiVisualstudiocode,
} from "react-icons/si";

const technologies = [
  { icon: <FaJava />, color: "#007396", name: "Java" },
  { icon: <SiHibernate />, color: "#59666C", name: "Hibernate" },
  { icon: <SiSpringboot />, color: "#6DB33F", name: "Spring Boot" },
  { icon: <FaDatabase />, color: "#00758F", name: "MySQL" },
  { icon: <FaNodeJs />, color: "#68A063", name: "Node.js" },
  { icon: <FaReact />, color: "#61DAFB", name: "React.js" },
  { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
  { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
  { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
  { icon: <SiVisualstudiocode />, color: "#007ACC", name: "VS Code" },
  { icon: <SiEclipseide />, color: "#2C2255", name: "Eclipse" },
  { icon: <SiTailwindcss />, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: <SiPostman />, color: "#FF6C37", name: "Postman" },
  { icon: <FaGitAlt />, color: "#F05032", name: "Git" },
  { icon: <FaGithub />, color: "#181717", name: "GitHub" },
];

export default function Expertise() {
  return (
    <div className="my-14 bg-white dark:bg-gray-900 transition duration-300">
      <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-10">
        Tech Stack
      </h1>

      {/* Right Section: Tech Icons */}
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <div
                style={{ color: tech.color }}
                className="text-5xl mb-4"
                aria-label={tech.name}
              >
                {tech.icon}
              </div>
              <p className="text-lg font-semibold text-black dark:text-gray-100">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
