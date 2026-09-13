import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS_DATA } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Atom, 
  Wind, 
  Zap, 
  GitBranch, 
  Globe 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Code2,
  Palette,
  FileCode2,
  Atom,
  Wind,
  Zap,
  GitBranch,
  Github: GithubIcon,
  Globe
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.fromTo('.skills-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.skills-heading',
            start: 'top 85%',
          }
        }
      );

      // Staggered Cards Reveal
      gsap.fromTo('.skill-card',
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="skills-heading text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="skill-card glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800/80 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${skill.color} border shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-full bg-slate-900/60 border border-slate-800">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Subtle Hover Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/50 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-purple-400 font-medium">Core Stack</span>
                  <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-ping" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
