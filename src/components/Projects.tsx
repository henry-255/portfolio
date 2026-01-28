import React, { useState } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaPhp, 
  FaGithub, 
  FaExternalLinkAlt,
  FaCodeBranch,
  FaSpinner
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { Project } from '../types';
import { cn } from '../lib/utils';

const projects: Project[] = [
  {
    id: 'ai-resume-scanner',
    title: 'AI Resume Scanner',
    description: 'Intelligent resume analysis with real-time scoring and feedback',
    longDescription: 'A modern web application that leverages AI/ML to analyze resumes, providing detailed feedback on content, formatting, and keywords. Features include real-time scanning, score tracking, and actionable improvement suggestions.',
    technologies: [
      { name: 'React', icon: <FaReact />, color: 'oklch(0.65 0.2 240)' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'oklch(0.65 0.15 260)' },
      { name: 'Node.js', icon: <FaNodeJs />, color: 'oklch(0.6 0.2 140)' },
      { name: 'Docker', icon: <FaDocker />, color: 'oklch(0.65 0.15 220)' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'oklch(0.65 0.15 280)' },
    ],
    status: 'in-progress',
    githubUrl: 'https://github.com/yourusername/ai-resume-scanner',
    features: [
      'Real-time resume parsing and analysis',
      'AI-powered scoring algorithm',
      'Interactive feedback dashboard',
      'Docker containerization',
      'RESTful API with Node.js',
    ],
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'Modern property listing platform with advanced search and CRM',
    longDescription: 'A comprehensive real estate management system featuring property listings, advanced search filters, agent CRM, and lead management. Built with performance and scalability in mind.',
    technologies: [
      { name: 'JavaScript', icon: <SiJavascript />, color: 'oklch(0.8 0.2 90)' },
      { name: 'PHP', icon: <FaPhp />, color: 'oklch(0.65 0.2 340)' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'oklch(0.65 0.2 210)' },
    ],
    status: 'completed',
    githubUrl: 'https://github.com/yourusername/real-estate-platform',
    liveUrl: 'https://real-estate-demo.example.com',
    features: [
      'Advanced property search with filters',
      'AJAX-powered contact forms',
      'Responsive mobile-first design',
      'Image optimization and lazy loading',
      'SEO optimized listings',
    ],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<string>(projects[0].id);

  const project = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Showcasing my expertise in full-stack development and DevOps practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj.id)}
                className={cn(
                  "group relative p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300",
                  "hover:shadow-2xl hover:-translate-y-1",
                  selectedProject === proj.id
                    ? "border-primary bg-primary/5"
                    : "border-foreground/10 hover:border-primary/30"
                )}
              >
                {/* Status Badge */}
                <div className={cn(
                  "absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold",
                  proj.status === 'completed' 
                    ? "bg-green-500/20 text-green-600" 
                    : "bg-blue-500/20 text-blue-600"
                )}>
                  {proj.status === 'completed' ? 'Live' : 'In Progress'}
                </div>

                <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                <p className="text-foreground/70 mb-4">{proj.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 text-sm"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {proj.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Project Details */}
          {project && (
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-3xl border border-foreground/10 p-8 bg-gradient-to-br from-background to-foreground/5">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-4">
                    {project.status === 'in-progress' && (
                      <FaSpinner className="animate-spin text-primary" />
                    )}
                  </div>
                </div>

                {/* Detailed Description */}
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border-2 border-foreground/20 font-semibold hover:bg-foreground/5 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  {project.status === 'in-progress' && (
                    <button className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors">
                      <FaCodeBranch />
                      View Progress
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;