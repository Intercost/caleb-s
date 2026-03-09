import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Caleb Howard | Education',
  description: 'Explore Caleb Howard\'s academic journey and educational achievements.',
}

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20 md:py-24 px-4 bg-darksurface">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-lighttext mb-10 text-center md:text-left">
              Academic Journey
            </h2>
            <div className="section-separator mx-auto md:mx-0"></div>

            <div className="space-y-12">
              {/* University */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <Image
                      src="/ku.jpeg"
                      alt="Kenyatta University"
                      fill
                      className="object-cover shadow-lg border-4 border-primary rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-lighttext mb-2">
                    Kenyatta University
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-lighttext mb-4">
                    Currently pursuing a degree in Computer Science at Kenyatta University, focusing on software development, AI, and systems architecture.
                  </p>
                  <p className="text-mutedtext">
                    This program has provided me with a strong foundation in computer science principles, from data structures and algorithms to modern software engineering practices.
                  </p>
                </div>
              </div>

              {/* KCSE */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <Image
                      src="/kcse.jpeg"
                      alt="KCSE Results"
                      fill
                      className="object-cover shadow-lg border-4 border-primary rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-lighttext mb-2">
                    Kenya Certificate of Secondary Education (KCSE)
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    High School Certification
                  </p>
                  <p className="text-lighttext mb-4">
                    Completed secondary education with strong performance across mathematics, sciences, and languages, demonstrating excellence in analytical and critical thinking skills.
                  </p>
                  <p className="text-mutedtext">
                    This foundation prepared me for university-level work and ignited my passion for technology and innovation.
                  </p>
                </div>
              </div>

              {/* KCPE */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 flex-shrink-0">
                    <Image
                      src="/kcpe.jpeg"
                      alt="KCPE Results"
                      fill
                      className="object-cover shadow-lg border-4 border-primary rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-lighttext mb-2">
                    Kenya Certificate of Primary Education (KCPE)
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Primary School Certification
                  </p>
                  <p className="text-lighttext mb-4">
                    Successfully completed primary education with excellent results, establishing a strong academic foundation in core subjects.
                  </p>
                  <p className="text-mutedtext">
                    This early achievement set the stage for continued academic excellence and a lifelong pursuit of learning and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-16 bg-darkbg p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-lighttext mb-4">
                Continuous Learning
              </h3>
              <p className="text-lighttext mb-4">
                Beyond formal education, I'm committed to continuous learning through:
              </p>
              <ul className="space-y-2 text-mutedtext list-disc list-inside">
                <li>Online courses and technical certifications</li>
                <li>Open-source contributions and collaborative projects</li>
                <li>Advanced AI and machine learning research</li>
                <li>Building real-world applications and systems</li>
                <li>Mentoring and knowledge sharing with others</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
