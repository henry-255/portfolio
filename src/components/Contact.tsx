import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'youremail@example.com', href: 'mailto:youremail@example.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gradient-to-b from-background to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-lg font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 text-2xl transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <h4 className="text-lg font-bold mb-2">📅 Availability</h4>
                <p className="text-sm text-foreground/70">
                  I'm currently available for freelance projects and full-time opportunities.
                  Response time: within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-foreground/10 p-8 bg-gradient-to-br from-background to-foreground/5">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 text-4xl mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-foreground/70 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                  <p className="text-foreground/70 mb-8">
                    Fill out the form below and I'll respond as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border border-foreground/20",
                            "bg-background/50 focus:bg-background",
                            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent",
                            "transition-all duration-300"
                          )}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border border-foreground/20",
                            "bg-background/50 focus:bg-background",
                            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent",
                            "transition-all duration-300"
                          )}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border border-foreground/20",
                          "bg-background/50 focus:bg-background",
                          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent",
                          "transition-all duration-300 resize-none"
                        )}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/60">
                        * Required fields
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold",
                          "bg-primary text-white hover:bg-primary-dark",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          "transition-all duration-300"
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-foreground/10">
                <h4 className="text-lg font-bold mb-2">🎯 What to Include</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Project goals and requirements</li>
                  <li>• Timeline and budget</li>
                  <li>• Preferred tech stack</li>
                  <li>• Any existing codebase</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-foreground/10">
                <h4 className="text-lg font-bold mb-2">⏱️ Typical Response</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Initial response: Within 24 hours</li>
                  <li>• Project estimation: 1-2 business days</li>
                  <li>• Contract signing: 3-5 business days</li>
                  <li>• Project kickoff: Within 1 week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}