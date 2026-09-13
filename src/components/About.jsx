import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DEVELOPER_INFO, STATS_DATA } from '../data/portfolioData';
import { Code, Layout, Smartphone, RefreshCw, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Reveal
      gsap.fromTo('.about-heading', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-heading',
            start: 'top 85%',
          }
        }
      );

      // Paragraph & Content Reveal
      gsap.fromTo('.about-content', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 85%',
          }
        }
      );

      // Stat Cards Stagger Reveal
      gsap.fromTo('.stat-card', 
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.stat-grid',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { title: "React.js & JavaScript", desc: "Building scalable modular application architecture." },
    { title: "Tailwind CSS & Styling", desc: "Crafting fluid responsive layouts with dark-mode first design." },
    { title: "GSAP Animations", desc: "Adding purposeful, micro-interactions and smooth scroll reveals." },
    { title: "API & Data Integration", desc: "Connecting REST APIs for dynamic real-time data flow." },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="about-heading text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main About Text */}
          <div className="about-content lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-4 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                Dedicated Frontend Developer based in {DEVELOPER_INFO.location}
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {DEVELOPER_INFO.aboutText}
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I specialize in crafting pixel-perfect, interactive web applications using modern tooling like <span className="text-purple-400 font-semibold">React.js</span>, <span className="text-purple-400 font-semibold">Tailwind CSS</span>, and <span className="text-pink-400 font-semibold">GSAP</span>. My focus is on writing clean, maintainable code while delivering exceptional user experience and performance across all devices.
              </p>

              {/* Core Feature Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="stat-grid lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS_DATA.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 text-center flex flex-col justify-center items-center group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
