import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.fromTo('.exp-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.exp-heading',
            start: 'top 85%',
          }
        }
      );

      // Timeline Items Reveal
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.25,
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="exp-heading text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Career Pathway
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Experience Timeline */}
        <div className="timeline-container max-w-4xl mx-auto relative">
          
          {/* Vertical Line Accent */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-500 to-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES_DATA.map((exp, idx) => (
              <div
                key={idx}
                className={`timeline-item relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center z-10 shadow-lg shadow-purple-500/30">
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                  <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80 space-y-4 shadow-xl">
                    
                    {/* Header Details */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 font-medium">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white pt-1">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-400">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
