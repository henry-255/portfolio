import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-gray-900/95 backdrop-blur-md' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-white">
            Henry Mba
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-4 border-l border-gray-700 pl-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <FaFileDownload />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white py-2 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com" className="text-gray-400 hover:text-white p-2">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white p-2">
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:henry@example.com" className="text-gray-400 hover:text-white p-2">
                  <HiMail size={20} />
                </a>
              </div>
              
              <a
                href="/resume.pdf"
                className="mt-3 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}