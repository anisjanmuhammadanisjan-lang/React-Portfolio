import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.edu-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.edu-card',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Education Card */}
        <div className="max-w-2xl mx-auto">
          <div className="edu-card glass-panel glass-panel-hover p-8 rounded-2xl border border-slate-800/80 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 shrink-0">
              <GraduationCap className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-xs font-mono text-purple-300">
                <Calendar className="w-3.5 h-3.5" />
                <span>Completion: {DEVELOPER_INFO.education.year}</span>
              </div>

              <h3 className="text-2xl font-bold text-white pt-1">
                {DEVELOPER_INFO.education.degree}
              </h3>

              <p className="text-slate-300 text-sm">
                Focus on modern Information Technology, Web Development fundamentals, software concepts, and algorithmic problem solving.
              </p>

              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Web Engineering
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-pink-400" /> Software Systems
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
