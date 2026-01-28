import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Scanner",
      description: "Intelligent resume analysis with real-time scoring",
      tech: ["React", "TypeScript", "Node.js", "Docker"],
      github: "#",
      live: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search",
      tech: ["JavaScript", "PHP", "MySQL"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my work in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-800/80 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg text-sm font-medium"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg text-sm font-medium"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}