import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, FileCode2, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });

      tl.fromTo('.hero-badge', 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, delay: 0.2 }
      )
      .fromTo('.hero-subheading', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0 }, 
        '-=0.6'
      )
      .fromTo('.hero-heading', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0 }, 
        '-=0.6'
      )
      .fromTo('.hero-role', 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1 }, 
        '-=0.6'
      )
      .fromTo('.hero-desc', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0 }, 
        '-=0.6'
      )
      .fromTo('.hero-cta', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, stagger: 0.15 }, 
        '-=0.5'
      )
      .fromTo('.hero-visual', 
        { opacity: 0, x: 40, scale: 0.9 }, 
        { opacity: 1, x: 0, scale: 1, duration: 1.2 }, 
        '-=1.0'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-xs sm:text-sm text-purple-300 font-medium shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{DEVELOPER_INFO.availability}</span>
            </div>

            {/* Greetings */}
            <p className="hero-subheading text-sm sm:text-base font-semibold tracking-wider text-purple-400 uppercase">
              HELLO, I'M
            </p>

            {/* Main Name Heading */}
            <h1 className="hero-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
              <span className="block">{DEVELOPER_INFO.name}</span>
            </h1>

            {/* Role Title with Gradient */}
            <div className="hero-role inline-block">
              <span className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300">
                {DEVELOPER_INFO.role}
              </span>
            </div>

            {/* Description */}
            <p className="hero-desc text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {DEVELOPER_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-200 glass-panel glass-panel-hover border border-slate-700/80 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <span>Let's Talk</span>
              </a>
            </div>

          </div>

          {/* Right Visual Developer Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="hero-visual relative w-full max-w-md">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-xl animate-pulse" />

              {/* Developer Code Window Mockup */}
              <div className="relative glass-panel rounded-2xl border border-slate-800/80 p-5 shadow-2xl overflow-hidden">
                
                {/* Mac Style Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>developer.config.js</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-pink-400" />
                </div>

                {/* Code Snippet Content */}
                <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed py-2">
                  <p><span className="text-purple-400">const</span> <span className="text-pink-400">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-amber-300">"{DEVELOPER_INFO.name}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-amber-300">"{DEVELOPER_INFO.role}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">location:</span> <span className="text-amber-300">"{DEVELOPER_INFO.location}"</span>,</p>
                  <p className="pl-4"><span className="text-slate-400">skills:</span> [</p>
                  <p className="pl-8 text-cyan-300">"React.js", "JavaScript", "Tailwind", "GSAP"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">"Available for Opportunities"</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Micro Tech Tags */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-800/40 text-[11px] font-mono text-purple-300 flex items-center gap-1">
                    <Code2 className="w-3 h-3" /> Clean Code
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-pink-950/60 border border-pink-800/40 text-[11px] font-mono text-pink-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Interactive UI
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> High Performance
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
