import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="hero-bg flex items-center justify-center min-h-screen text-center px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <Image
                src="/passport.jpeg"
                alt="Caleb Howard"
                width={192}
                height={192}
                priority
                className="w-full h-full object-cover shadow-xl border-4 border-primary rounded-lg animate-fade-in-down"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-4 animate-fade-in-down delay-200">
              Hello, I'm
            </p>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-lighttext leading-tight mb-6 animate-fade-in-up">
              Caleb Howard
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-mutedtext mb-8 animate-fade-in-up delay-200">
              A driven <span className="text-primary font-medium">Innovator</span>, <span className="text-primary font-medium">Developer</span>, and <span className="text-primary font-medium">Problem Solver</span>,
              I am passionate about leveraging technology to create impactful solutions using AI-driven engines.
            </p>
            
            <Link
              href="/achievements"
              className="inline-block bg-primary hover:bg-secondary text-lighttext font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in-up delay-400"
            >
              View My Achievements
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
