import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Caleb Howard | About Me',
  description: 'Learn more about Caleb Howard, an innovator and developer passionate about creating impactful solutions.',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* About Section */}
        <section id="about" className="py-20 md:py-24 px-4 bg-darksurface min-h-[calc(100vh-64px-108px)] flex items-center">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-lighttext mb-10 text-center md:text-left">
              About Me
            </h2>
            <div className="section-separator mx-auto md:mx-0"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 flex justify-center flex-shrink-0">
                <div className="relative w-48 h-48">
                  <Image
                    src="/passport.jpeg"
                    alt="Caleb Howard"
                    fill
                    className="object-cover shadow-xl border-4 border-primary rounded-lg"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 text-lg text-mutedtext space-y-4">
                <p>
                  I am Caleb Howard, an innovator driven by the belief that code is more than just logic—it is a tool for human empowerment. My journey began at the intersection of rigorous computer science and a fascination with autonomous systems. At the age of 19, I transitioned from exploring how software works to architecting complex, real-time AI environments that bridge the gap between human intent and machine execution.
                </p>
                <p>
                  My technical focus lies in building responsive, intelligent systems—specializing in full-stack development, asynchronous streaming, and AI integration. However, my perspective is widened by my background in leadership. As a former Art Club Chairman and Handball Captain, I understand that the most successful projects require a balance of creative intuition and disciplined teamwork. Whether I am leading a squad on the field or volunteering with the Red Cross, I carry the same mission: to solve problems with precision and purpose.
                </p>
                <p>
                  I am currently dedicated to developing accessible software that empowers marginalized communities and simplifies complex communication with AI at the helm. I don't just build applications; I build solutions that resonate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
