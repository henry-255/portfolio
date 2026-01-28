import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 mb-8">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="block text-white">Henry Mba</span>
          <span className="block text-blue-400 mt-2">Full-Stack Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Building scalable applications with <span className="text-blue-400 font-semibold">React</span>,{' '}
          <span className="text-blue-400 font-semibold">Node.js</span>, and{' '}
          <span className="text-blue-400 font-semibold">Docker</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            View Projects
            <FaArrowDown />
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['React', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'AWS'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-8">
          <FaArrowDown className="text-gray-500 mx-auto" />
        </div>
      </div>
    </section>
  );
}