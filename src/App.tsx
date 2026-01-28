import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-900">Henry Mba</a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="/resume.pdf" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Resume
              </a>
            </div>
            <button className="md:hidden">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Henry Mba</span>
            <span className="block text-blue-600 mt-2">Full-Stack Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Building web applications with React, Node.js, and modern tools
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-gray-300 px-6 py-3 rounded-lg hover:border-blue-600">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">AI Resume Scanner</h3>
              <p className="text-gray-600 mb-4">Intelligent resume analysis with real-time scoring</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">View Code →</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Live Demo →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-3">Real Estate Platform</h3>
              <p className="text-gray-600 mb-4">Property listing platform with advanced search</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">View Code →</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Live Demo →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'AWS', 'Git', 'Tailwind'].map(skill => (
              <div key={skill} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-center text-gray-600 mb-8">
              Interested in working together? Let's connect!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:henry@example.com" className="text-blue-600 hover:text-blue-800">Email</a>
              <a href="https://github.com" className="text-blue-600 hover:text-blue-800">GitHub</a>
              <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Henry Mba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}