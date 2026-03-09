import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Chimera – AI Security Research Orchestrator | Caleb Howard',
  description: 'Learn about Chimera, a full-stack AI security research assistant with autonomous analysis and vulnerability detection.',
}

export default function Chimera() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        <section className="py-20 md:py-24 px-4 bg-darksurface">
          <div className="container mx-auto max-w-4xl">
            <Link href="/achievements" className="text-primary hover:text-secondary mb-6 flex items-center gap-2">
              ← Back to Projects
            </Link>

            <h1 className="text-5xl md:text-6xl font-extrabold text-lighttext mb-6">
              Chimera
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-mutedtext mb-8">
              AI Security Research Orchestrator
            </h2>

            <div className="prose prose-invert max-w-none text-lighttext mb-12">
              <p className="text-lg text-mutedtext mb-4 leading-relaxed">
                Project Chimera is a full-stack AI security research assistant built with Flask and Google Gemini. It bridges LLM intelligence with local system execution, enabling context-aware technical reasoning, iterative debugging, and structured AI-assisted research workflows.
              </p>

              <h3 className="text-2xl font-bold text-lighttext mt-8 mb-4">
                Key Features
              </h3>
              
              <ul className="space-y-3 text-lighttext mb-8">
                {[
                  'Persistent project memory for context retention',
                  'AI-driven code analysis and vulnerability detection',
                  'Automated tool orchestration via Python subprocess',
                  'Real-time process streaming using Server-Sent Events (SSE)',
                  'Resilient API key rotation for security',
                  'Project memory viewer for workflow transparency',
                  'File-assisted prompting for precision analysis',
                  'Robust error recovery and handling',
                ].map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-primary flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-lighttext mt-8 mb-4">
                Architecture Highlights
              </h3>

              <p className="text-lighttext mb-4 leading-relaxed">
                Chimera demonstrates advanced AI application architecture beyond traditional chatbot systems. It showcases how LLMs can be effectively combined with local system tools, persistent storage, and real-time communication to solve complex security research challenges.
              </p>

              <p className="text-lg text-mutedtext leading-relaxed">
                The system includes structured AI-assisted research workflows, enabling iterative debugging, technical reasoning, and vulnerability discovery in a seamless, integrated manner.
              </p>
            </div>

            <Link
              href="/achievements"
              className="inline-block bg-primary hover:bg-secondary text-lighttext font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
