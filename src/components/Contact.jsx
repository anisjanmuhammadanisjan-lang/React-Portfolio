import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.fromTo('.contact-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-heading',
            start: 'top 85%',
          }
        }
      );

      // Form & Info Cards Reveal
      gsap.fromTo('.contact-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="contact-heading text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Together</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have a project, opportunity or idea? I'd love to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Contact Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={CONTACT_LINKS.email}
              className="contact-item glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex items-center gap-5 group transition-all block"
            >
              <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Email Address</p>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                  {CONTACT_LINKS.emailDisplay}
                </h3>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={CONTACT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex items-center gap-5 group transition-all block"
            >
              <div className="p-4 rounded-xl bg-pink-950/60 border border-pink-800/40 text-pink-400 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">GitHub Profile</p>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-pink-300 transition-colors">
                  anisjanmuhammadanisjan-lang
                </h3>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 flex items-center gap-5 group transition-all block"
            >
              <div className="p-4 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">LinkedIn Profile</p>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Anis Jan
                </h3>
              </div>
            </a>

            {/* Location Badge */}
            <div className="contact-item glass-panel p-6 rounded-2xl border border-slate-800/80 flex items-center gap-5">
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Location</p>
                <h3 className="text-base font-bold text-slate-100">
                  {CONTACT_LINKS.location}
                </h3>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="contact-item lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300 block">
                        Your Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300 block">
                        Your Email <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-medium text-slate-300 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300 block">
                      Message <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hi Muhammad, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all hover:-translate-y-0.5"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
