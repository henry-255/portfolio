import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaLaptop } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeIcons = {
    light: <FaSun />,
    dark: <FaMoon />,
    system: <FaLaptop />,
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-foreground/10'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-2xl bg-foreground/5">
              {(['light', 'dark', 'system'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={cn(
                    'p-2 rounded-xl transition-all',
                    theme === t
                      ? 'bg-primary text-white'
                      : 'hover:bg-foreground/10'
                  )}
                  aria-label={`Switch to ${t} theme`}
                >
                  {themeIcons[t]}
                </button>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center gap-2 pt-4 border-t border-foreground/10">
                <span className="text-sm font-medium">Theme:</span>
                <div className="flex gap-1">
                  {(['light', 'dark', 'system'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={cn(
                        'p-2 rounded-lg transition-all',
                        theme === t
                          ? 'bg-primary text-white'
                          : 'hover:bg-foreground/10'
                      )}
                      aria-label={`Switch to ${t} theme`}
                    >
                      {themeIcons[t]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors text-center"
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

export default Navigation;