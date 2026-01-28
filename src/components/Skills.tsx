import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaCloud,
  FaShieldAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiLinux,
} from 'react-icons/si';
import type { Skill } from '../types';
import { cn } from '../lib/utils';

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', icon: <FaReact /> },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: <SiTypescript /> },
  { name: 'Next.js', level: 85, category: 'frontend', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: <SiTailwindcss /> },
  
  // Backend
  { name: 'Node.js', level: 88, category: 'backend', icon: <FaNodeJs /> },
  { name: 'PostgreSQL', level: 82, category: 'backend', icon: <SiPostgresql /> },
  { name: 'PHP', level: 78, category: 'backend', icon: <FaCode /> },
  { name: 'REST APIs', level: 90, category: 'backend', icon: <FaServer /> },
  
  // DevOps
  { name: 'Docker', level: 85, category: 'devops', icon: <FaDocker /> },
  { name: 'Kubernetes', level: 75, category: 'devops', icon: <SiKubernetes /> },
  { name: 'AWS', level: 80, category: 'devops', icon: <FaAws /> },
  { name: 'Terraform', level: 70, category: 'devops', icon: <SiTerraform /> },
  { name: 'GitHub Actions', level: 85, category: 'devops', icon: <SiGithubactions /> },
  { name: 'Jenkins', level: 72, category: 'devops', icon: <SiJenkins /> },
  { name: 'Linux', level: 85, category: 'devops', icon: <SiLinux /> },
  
  // Tools
  { name: 'Git', level: 95, category: 'tools', icon: <FaGitAlt /> },
  { name: 'CI/CD', level: 88, category: 'tools', icon: <FaCloud /> },
  { name: 'Security', level: 75, category: 'tools', icon: <FaShieldAlt /> },
];

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'oklch(0.65 0.2 240)' },
  backend: { label: 'Backend', color: 'oklch(0.6 0.2 140)' },
  devops: { label: 'DevOps', color: 'oklch(0.65 0.15 220)' },
  tools: { label: 'Tools', color: 'oklch(0.65 0.2 340)' },
};

export default function Skills() {
  const categories = Object.keys(categoryConfig) as (keyof typeof categoryConfig)[];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-gradient-to-b from-background to-foreground/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive toolkit for modern web development and infrastructure management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const config = categoryConfig[category];
            const categorySkills = skills.filter(skill => skill.category === category);

            return (
              <div
                key={category}
                className="relative group"
              >
                {/* Category Card */}
                <div className="relative p-6 rounded-3xl border border-foreground/10 bg-gradient-to-b from-background to-foreground/5 overflow-hidden">
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: config.color }}
                  />
                  
                  <div className="relative">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{ background: `${config.color}20`, color: config.color }}
                      >
                        {categorySkills[0]?.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{config.label}</h3>
                        <p className="text-sm text-foreground/60">
                          {categorySkills.length} skills
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-6">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-lg opacity-80">{skill.icon}</span>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm font-semibold">{skill.level}%</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2 rounded-full bg-foreground/10 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${skill.level}%`,
                                background: `linear-gradient(90deg, ${config.color}, ${config.color}80)`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend & Additional Info */}
        <div className="mt-16 p-8 rounded-3xl border border-foreground/10 bg-gradient-to-r from-background to-foreground/5">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Experience Levels</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-3 w-12 rounded-full bg-gradient-to-r from-primary to-primary/50" />
                  <span className="text-sm">Expert (85-100%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-3 w-10 rounded-full bg-gradient-to-r from-primary/70 to-primary/30" />
                  <span className="text-sm">Advanced (70-84%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-3 w-8 rounded-full bg-gradient-to-r from-primary/40 to-primary/10" />
                  <span className="text-sm">Proficient (60-69%)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {['Rust', 'Go', 'GraphQL', 'Serverless'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Certifications</h4>
              <ul className="space-y-2">
                <li className="text-sm">AWS Certified Solutions Architect</li>
                <li className="text-sm">Docker Certified Associate</li>
                <li className="text-sm">Kubernetes Application Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}