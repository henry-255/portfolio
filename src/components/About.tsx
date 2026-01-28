import { FaGraduationCap, FaBriefcase, FaLightbulb, FaRocket } from 'react-icons/fa';
import { cn } from '../lib/utils';

export default function About() {
  const timeline = [
    { year: '2023', title: 'Senior Full-Stack Developer', description: 'Led development of multiple enterprise applications' },
    { year: '2022', title: 'DevOps Engineer', description: 'Implemented CI/CD pipelines and container orchestration' },
    { year: '2021', title: 'Full-Stack Developer', description: 'Built responsive web applications with React & Node.js' },
    { year: '2020', title: 'Started Development Journey', description: 'First professional role as a junior developer' },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-linear-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From writing my first line of code to architecting complex systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <div>
            <div className="space-y-6 mb-12">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer with 4+ years of experience building scalable web applications 
                and implementing robust DevOps practices. My journey started with frontend development 
                and naturally evolved into full-stack and infrastructure engineering.
              </p>
              
              <p className="text-lg leading-relaxed">
                What excites me most is solving complex problems at the intersection of development 
                and operations. I believe in creating maintainable, efficient systems that not only 
                work well but are also easy to deploy, monitor, and scale.
              </p>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <FaLightbulb className="text-2xl text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Philosophy</h4>
                  <p className="text-gray-300">
                    I follow the principle of "infrastructure as code" and believe in automating 
                    everything that can be automated, so we can focus on solving real problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FaRocket className="text-primary" />
              Career Timeline
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary to-secondary" />

              {/* Timeline items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className={cn(
                      "absolute left-0 w-12 h-12 rounded-full flex items-center justify-center",
                      "bg-linear-to-r from-primary to-secondary",
                      "border-4 border-gray-900"
                    )}>
                      {index === 0 ? <FaBriefcase /> : 
                       index === timeline.length - 1 ? <FaGraduationCap /> : 
                       <div className="w-3 h-3 rounded-full bg-white" />}
                    </div>

                    {/* Content */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Working On */}
            <div className="mt-12 p-6 rounded-2xl bg-linear-to-r from-primary/20 to-secondary/20 border border-primary/30">
              <h4 className="text-xl font-bold mb-4">Currently Focused On</h4>
              <div className="flex flex-wrap gap-3">
                {['Kubernetes', 'Microservices', 'Cloud Native', 'AI Integration'].map((topic) => (
                  <span key={topic} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-linear-to-r from-white/5 to-transparent">
          <h3 className="text-2xl font-bold mb-6">Beyond Code</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-lg font-semibold mb-2">📚 Tech Reading</div>
              <p className="text-sm text-gray-400">Keeping up with latest tech trends and architecture patterns</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-lg font-semibold mb-2">🎮 Gaming</div>
              <p className="text-sm text-gray-400">Strategy games that challenge problem-solving skills</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-lg font-semibold mb-2">🎵 Music Production</div>
              <p className="text-sm text-gray-400">Creating electronic music as a creative outlet</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-lg font-semibold mb-2">🏋️ Fitness</div>
              <p className="text-sm text-gray-400">Maintaining physical health for mental clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}