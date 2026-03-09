import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sova – Autonomous AI Desktop Assistant | Caleb Howard',
  description: 'Learn about Sova, an autonomous AI desktop assistant with reasoning, automation, and task execution capabilities.',
}

export default function Sova() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20 md:py-24 px-4 bg-darksurface">
          <div className="container mx-auto max-w-4xl">
            <Link href="/achievements" className="text-primary hover:text-secondary mb-6 flex items-center gap-2">
              ← Back to Projects
            </Link>

            <h1 className="text-5xl md:text-6xl font-extrabold text-lighttext mb-6">
              Sova
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-mutedtext mb-8">
              Autonomous AI Desktop Assistant
            </h2>

            <div className="prose prose-invert max-w-none text-lighttext mb-12">
              <p className="text-lg text-mutedtext mb-4 leading-relaxed">
                Sova is an autonomous AI desktop assistant I engineered to act as an intelligent control layer over a computer system. It combines LLM reasoning with tool execution, persistent memory, emotional modeling, project architecture generation, codebase modification, real-time streaming, task scheduling, and proactive automation.
              </p>

              <h3 className="text-2xl font-bold text-lighttext mt-8 mb-4">
                Key Capabilities
              </h3>
              
              <ul className="space-y-3 text-lighttext mb-8">
                {[
                  'LLM-driven reasoning and autonomous decision-making',
                  'File and application management',
                  'Software project modification and code generation',
                  'Multi-agent spawning and coordination',
                  'Persistent memory and task learning',
                  'Real-time streaming and process monitoring',
                  'Emotional modeling and adaptive responses',
                  'Proactive task automation and scheduling',
                ].map((capability) => (
                  <li key={capability} className="flex gap-3">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-mutedtext leading-relaxed">
                Sova goes beyond traditional chatbots or voice assistants—it's an operating system-level AI that can manage files, run applications, modify software projects, spawn agents, and learn from past tasks, making it a true AI-powered operating assistant.
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
    </div>
  )
}
