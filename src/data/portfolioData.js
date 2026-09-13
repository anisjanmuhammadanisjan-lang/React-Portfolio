export const DEVELOPER_INFO = {
  name: "MUHAMMAD ANIS JAN",
  role: "Frontend Developer",
  location: "Pakistan",
  bio: "I build modern, responsive and interactive web experiences using React, JavaScript, Tailwind CSS and GSAP.",
  aboutText: "I am a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. With a solid foundation in modern web technologies, I bridge the gap between design and functionality to deliver sleek UI and seamless user experience.",
  availability: "Available for Frontend Opportunities",
  education: {
    degree: "Bachelor's in IT",
    year: "2026",
    institution: "Information Technology Institute"
  }
};

export const CONTACT_LINKS = {
  email: "mailto:anisjan2001@gmail.com",
  emailDisplay: "anisjan2001@gmail.com",
  github: "https://github.com/anisjanmuhammadanisjan-lang",
  linkedin: "https://www.linkedin.com/in/anis-jan-60a43a2a3",
  location: "Pakistan"
};

export const PROJECT_LINKS = {
  todoAppLive: "https://to-do-react-1nz7.vercel.app/",
  ecommerceLive: "https://iridescent-pithivier-8cfef5.netlify.app/",
  reactPortfolioLive: "https://react-portfolio-chi-bay.vercel.app/"
};

export const SKILLS_DATA = [
  {
    name: "HTML5",
    category: "Structure & Semantics",
    description: "Semantic layouts, accessibility (a11y), standard web markup.",
    icon: "Code2",
    color: "from-amber-500/20 to-orange-500/20 border-orange-500/30 text-orange-400"
  },
  {
    name: "CSS3",
    category: "Styling & Visuals",
    description: "Modern CSS, Flexbox, Grid, animations and custom properties.",
    icon: "Palette",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
  },
  {
    name: "JavaScript",
    category: "Core Logic",
    description: "ES6+, DOM manipulation, async/await, closures, clean algorithms.",
    icon: "FileCode2",
    color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-400"
  },
  {
    name: "React.js",
    category: "Frontend Library",
    description: "Hooks, State management, Component lifecycle, SPA architecture.",
    icon: "Atom",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400"
  },
  {
    name: "Tailwind CSS",
    category: "Utility Styling",
    description: "Rapid responsive design, dark mode, design system tokens.",
    icon: "Wind",
    color: "from-sky-500/20 to-teal-500/20 border-sky-500/30 text-sky-400"
  },
  {
    name: "GSAP",
    category: "Web Animations",
    description: "ScrollTrigger, timeline orchestrations, high-performance UI motion.",
    icon: "Zap",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400"
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Branching strategies, commit history, merge conflict resolution.",
    icon: "GitBranch",
    color: "from-red-500/20 to-orange-500/20 border-red-500/30 text-red-400"
  },
  {
    name: "GitHub",
    category: "Collaboration",
    description: "Repositories, Pull Requests, Code reviews, GitHub Actions basics.",
    icon: "Github",
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300"
  },
  {
    name: "REST APIs",
    category: "Data Integration",
    description: "Fetch API, Axios, async data handling, endpoints connection.",
    icon: "Globe",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400"
  }
];

export const PROJECTS_DATA = [
  {
    id: "todo-app",
    name: "Todo App",
    description: "A responsive React Todo application for managing tasks with a clean and simple user interface.",
    technologies: ["React.js", "JavaScript", "Context API", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: PROJECT_LINKS.todoAppLive,
    image: "/src/assets/todo-app.png",
    featured: true,
    tagline: "Productivity Application"
  },
  {
    id: "ecommerce-website",
    name: "E-Commerce Website",
    description: "A modern responsive e-commerce website with product browsing, categories, product details and a clean shopping experience.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Responsive Design"],
    githubUrl: null,
    liveUrl: PROJECT_LINKS.ecommerceLive,
    image: "/src/assets/ecommerce-website.png",
    featured: true,
    tagline: "E-Commerce Web Application"
  },
  {
    id: "react-portfolio",
    name: "React Portfolio Website",
    description: "A modern and responsive personal portfolio website built with React.js to showcase my skills, projects, experience, and contact information.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "GSAP"],
    githubUrl: null,
    liveUrl: PROJECT_LINKS.reactPortfolioLive,
    image: "/src/assets/react-portfolio.png",
    featured: true,
    tagline: "Personal Portfolio Website"
  }
];

export const EXPERIENCES_DATA = [
  {
    role: "Frontend Developer Intern",
    company: "Bookme",
    duration: "2 Months",
    type: "Internship",
    responsibilities: [
      "Developed responsive user interfaces following modern design specs",
      "Worked extensively with HTML, CSS and JavaScript to build component layouts",
      "Worked on reusable frontend components across key web features",
      "Improved overall UI responsiveness and cross-browser consistency",
      "Collaborated closely with senior developers and design team"
    ]
  },
  {
    role: "React.js Developer",
    company: "Apptex Software Solution",
    duration: "Present",
    type: "Development",
    responsibilities: [
      "Built interactive web modules using React.js and modern state management",
      "Created highly reusable and clean component architecture",
      "Integrated REST APIs to load and mutate dynamic user data seamlessly",
      "Ensured robust, pixel-perfect responsive interfaces for mobile and desktop",
      "Applied modern frontend practices, performance optimizations and code quality"
    ]
  }
];

export const STATS_DATA = [
  { label: "Frontend Focus", value: "React.js" },
  { label: "Projects Completed", value: "10+" },
  { label: "Responsive Design", value: "100%" },
  { label: "Continuous Learning", value: "24/7" }
];
