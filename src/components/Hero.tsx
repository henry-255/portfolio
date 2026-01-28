import { FaGithub, FaDownload, FaArrowDown, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';

function Hero() {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/henry-255', label: 'GitHub' },
    { icon: <FaInstagram />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <SiGmail />, href: 'mailto:manhenry255@gmail.com', label: 'Email' },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen relative overflow-hidden gradient-bg flex items-center justify-center px-4 md:px-8"
      id="home"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block">Full-Stack &</span>
          <span className="block text-primary">DevOps Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
          Building scalable applications and automating infrastructure with{' '}
          <span className="font-semibold text-primary">React</span>,{' '}
          <span className="font-semibold text-primary">Node.js</span>, and{' '}
          <span className="font-semibold text-primary">Docker</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="#projects"
            className={cn(
              "group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-semibold text-lg transition-all duration-300",
              "hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-1",
              "focus:outline-none focus:ring-4 focus:ring-primary/30"
            )}
          >
            View Projects
            <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download
            className={cn(
              "group inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-foreground/10 font-semibold text-lg",
              "hover:bg-foreground/5 hover:-translate-y-1 transition-all duration-300"
            )}
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-4 rounded-2xl glass border border-foreground/10 text-2xl",
                "hover:bg-primary/10 hover:text-primary hover:-translate-y-1",
                "transition-all duration-300",
                isIntersecting && `animate-slide-up`
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-3 opacity-90">
          {['React', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL', 'AWS'].map((tech, index) => (
            <span
              key={tech}
              className={cn(
                "px-4 py-2 rounded-full bg-foreground/5 text-sm font-medium",
                "border border-foreground/10",
                isIntersecting && `animate-fade-in`
              )}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <FaArrowDown className="text-foreground/50" />
        </div>
      </div>
    </section>
  );
}

export default Hero;