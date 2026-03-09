import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Caleb Howard | Projects & Achievements',
  description: 'Explore Caleb Howard\'s projects, achievements, and AI-driven initiatives.',
}

const webProjects = [
  {
    title: 'Olmarithi - Tailor E-commerce',
    description: 'A bespoke online store for a tailor to market handcrafted bags.',
    fullDescription: 'Developed a specialized e-commerce platform for Olmarithi, a tailor, enabling her to showcase and sell handcrafted bags directly to customers online. Features product listings, a shopping cart, and secure checkout.',
    image: '/olmarithi.jpeg',
    tags: ['Web Development', 'E-commerce', 'Frontend', 'Backend'],
    link: 'https://olmarithi.vercel.app',
    external: true,
  },
  {
    title: 'WWF Willy - Poultry Farm Online Store',
    description: 'Connecting farmers to online markets for poultry products.',
    fullDescription: 'Created an online platform for a farmer, WWF Willy, to sell poultry products directly from his farm to a broader online market. The site facilitates product display, order placement, and delivery management.',
    image: '/wwf.jpeg',
    tags: ['E-commerce', 'Agriculture Tech', 'UX/UI Design'],
    link: 'https://wwf-willy.vercel.app',
    external: true,
  },
  {
    title: 'SovaCore - Web Services Portfolio',
    description: 'My personal platform for offering web development services.',
    fullDescription: 'Designed and developed SovaCore, my personal portfolio website, to showcase my web development services, projects, and expertise. It serves as a direct channel for potential clients.',
    image: '/sova.jpeg',
    tags: ['Portfolio', 'Service Marketing', 'Responsive Design'],
    link: 'https://sovacore.vercel.app',
    external: true,
  },
]

const aiProjects = [
  {
    title: 'Chimera – AI Security Research Orchestrator',
    description: 'An autonomous AI system for code analysis and vulnerability research.',
    fullDescription: 'Project Chimera is a full-stack AI security research assistant built with Flask and Google Gemini. It features persistent project memory, AI-driven code analysis, automated tool orchestration via Python subprocess, real-time process streaming using SSE, and resilient API key rotation. Chimera bridges LLM intelligence with local system execution, enabling context-aware technical reasoning, iterative debugging, and structured AI-assisted research workflows.',
    image: '/chimera.jpeg',
    tags: ['AI Security', 'Autonomous Agents', 'Full-Stack AI', 'Vulnerability Research'],
    link: '/chimera',
    external: false,
  },
  {
    title: 'Sova – Autonomous AI Desktop Assistant',
    description: 'An intelligent executive layer for a computer system, with reasoning and task execution.',
    fullDescription: 'Sova is an autonomous AI desktop assistant I engineered to act as an intelligent control layer over a computer system. It combines LLM reasoning with tool execution, persistent memory, emotional modeling, project architecture generation, codebase modification, real-time streaming, task scheduling, and proactive automation. Sova can manage files, run applications, modify software projects, spawn agents, and learn from past tasks.',
    image: '/sova.jpeg',
    tags: ['AI Assistant', 'Automation', 'Multi-Agent System', 'Operating System AI'],
    link: '/sova',
    external: false,
  },
]

export default function Achievements() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Achievements Section */}
        <section id="achievements" className="py-20 md:py-24 px-4 bg-darkbg">
          <div className="container mx-auto max-w-5xl">
            {/* Flagship AI Systems Section */}
            <div className="mb-16 pb-8 border-b border-darksurface">
              <h2 className="text-4xl font-bold text-lighttext mb-4 text-center md:text-left animate-fade-in-down">
                Flagship AI Systems
              </h2>
              <div className="section-separator mx-auto md:mx-0"></div>
              <p className="text-xl text-mutedtext mb-8 text-center md:text-left animate-fade-in-up delay-200">
                These are my most advanced creations — intelligent AI systems designed with real-time processing, memory, automation, and deep reasoning capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
                <a
                  href="/sova"
                  className="bg-primary hover:bg-secondary text-lighttext font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 flex items-center justify-center"
                >
                  <span className="text-2xl mr-2">🔵</span> Sova – Autonomous Desktop Assistant
                </a>
                <a
                  href="/chimera"
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-lighttext font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75 flex items-center justify-center"
                >
                  <span className="text-2xl mr-2">🔵</span> Chimera – AI Security Research
                </a>
              </div>
            </div>

            {/* Web Development Projects */}
            <h2 className="text-4xl font-bold text-lighttext mb-10 text-center md:text-left">
              My Projects
            </h2>
            <div className="section-separator mx-auto md:mx-0"></div>

            <h3 className="text-3xl font-bold text-lighttext mb-6 text-center md:text-left mt-12">
              Web Development Projects
            </h3>
            <div className="section-separator mx-auto md:mx-0 !w-60"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {webProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  fullDescription={project.fullDescription}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                  external={project.external}
                />
              ))}
            </div>

            {/* AI & Machine Learning Projects */}
            <h3 className="text-3xl font-bold text-lighttext mb-6 text-center md:text-left mt-12">
              AI & Machine Learning Projects
            </h3>
            <div className="section-separator mx-auto md:mx-0 !w-60"></div>
            
            <div className="space-y-8">
              {aiProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  fullDescription={project.fullDescription}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                  external={project.external}
                />
              ))}

              {/* Sova Alpha */}
              <div className="project-card bg-darksurface p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-primary">
                <div className="project-details">
                  <h4 className="text-3xl font-extrabold text-primary mb-4">
                    Sova Alpha: The Autonomous Software Project Architect
                  </h4>
                  <p className="text-mutedtext text-sm mb-4">
                    My specialized autonomous sub-agent for software project initiation.
                  </p>
                  <p className="text-lighttext mb-4">
                    Sova Alpha is my specialized autonomous sub-agent designed as a high-tier project architect and foundational software development engine. It transforms conceptual ideas into fully structured, organized, and ready-to-develop software projects by scoping, planning, generating multi-file architectures, and providing initial code and comprehensive documentation.
                  </p>
                  <p className="text-lighttext font-semibold mb-3">Key Capabilities:</p>
                  <ul className="space-y-2 mb-4 ml-4">
                    {[
                      { title: 'Comprehensive Project Scoping and Planning', desc: 'Analyzes requests, defines features, designs architecture, and recommends tech stacks.' },
                      { title: 'Intelligent Multi-File Architecture', desc: 'Creates professional directory structures and automates file generation.' },
                      { title: 'Environment Setup and Dependency Management', desc: 'Sets up virtual environments and manages configurations.' },
                      { title: 'Initial Code Generation', desc: 'Writes foundational boilerplate code aligned with best practices.' },
                      { title: 'Comprehensive Documentation', desc: 'Produces professional README.md with setup and usage guides.' },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="flex-shrink-0 text-primary">•</span>
                        <div>
                          <span className="font-medium text-lighttext">{item.title}:</span>
                          <p className="text-mutedtext text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {['AI Architecture', 'Autonomous Development', 'Project Scaffolding', 'Code Generation', 'Full Stack AI'].map((tag) => (
                      <span key={tag} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sova-Luxe */}
              <div className="project-card bg-darksurface p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-primary">
                <div className="project-details">
                  <h4 className="text-3xl font-extrabold text-primary mb-4">
                    Sova-Luxe: The Autonomous Code Refinement Specialist
                  </h4>
                  <p className="text-mutedtext text-sm mb-4">
                    My specialized autonomous sub-agent for code refinement and project enhancement.
                  </p>
                  <p className="text-lighttext mb-4">
                    Sova-Luxe is an advanced AI sub-agent dedicated to code modification and project enhancement. It intelligently analyzes existing codebases and precisely implements new features, bug fixes, and improvements based on natural language instructions. This allows rapid iteration on design and functionality, ensuring projects are optimized and meet new requirements efficiently.
                  </p>
                  <p className="text-lighttext font-semibold mb-3">Core Capabilities:</p>
                  <ul className="space-y-2 mb-4 ml-4">
                    {[
                      'Intelligent Code Comprehension and Contextual Analysis',
                      'Precise Code Modification, Insertion, and Deletion',
                      'Bug Fixing and Quality Improvement',
                      'Cross-Language and Multi-File Project Proficiency',
                      'Maintaining Project Integrity and Developer Focus',
                    ].map((capability) => (
                      <li key={capability} className="flex gap-3">
                        <span className="flex-shrink-0 text-primary">•</span>
                        <span className="text-lighttext">{capability}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {['AI Refinement', 'Code Enhancement', 'Intelligent Refactoring', 'Feature Integration', 'Quality Assurance'].map((tag) => (
                      <span key={tag} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
