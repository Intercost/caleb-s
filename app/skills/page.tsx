import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Caleb Howard | Skills',
  description: 'Explore Caleb Howard\'s technical skills and expertise in web development, AI, and more.',
}

interface Skill {
  name: string
  icon: string
}

const skills: Skill[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-24 px-4 bg-darksurface">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-lighttext mb-10 text-center md:text-left">
              My Skills
            </h2>
            <div className="section-separator mx-auto md:mx-0"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center mb-16">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-darkbg p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="mb-3"
                  />
                  <p className="text-lg font-medium text-lighttext">{skill.name}</p>
                </div>
              ))}
            </div>

            {/* AI-Driven Development Philosophy */}
            <h3 className="text-3xl font-bold text-lighttext mb-6 text-center md:text-left">
              AI-Driven Development Philosophy & Skills
            </h3>
            <div className="section-separator mx-auto md:mx-0 !w-60"></div>
            
            <div className="bg-darksurface p-6 rounded-lg shadow-xl border border-darksurface">
              <p className="text-lighttext mb-4">
                How Utilizing Advanced AI Tools (like Sova Alpha) Demonstrates My Abilities:
              </p>
              <ul className="space-y-4 ml-4">
                {[
                  {
                    title: 'Ability to Leverage Cutting-Edge Technology for Enhanced Productivity',
                    description: 'My workflow integrates advanced AI tools like Sova Alpha, demonstrating proficiency in leveraging cutting-edge technology to significantly accelerate project initiation and enhance overall development productivity. This allows for a streamlined approach to building robust software foundations.',
                  },
                  {
                    title: 'Ability to Focus on High-Level Problem-Solving and Innovation Rather Than Repetitive Setup',
                    description: 'By delegating foundational architectural tasks to intelligent AI agents, I am empowered to pivot my focus towards complex, high-level problem-solving, innovative feature development, and refining user experience. This strategic use of AI ensures that my time is dedicated to creative and critical challenges.',
                  },
                  {
                    title: 'Ability to Manage and Understand Complex Software Architectures',
                    description: 'Working alongside AI-driven architects like Sova Alpha has deepened my practical understanding of generating and managing complex, multi-file software architectures. It showcases my capability to oversee and direct sophisticated automated development processes, ensuring robust and scalable project structures.',
                  },
                  {
                    title: 'Ability to Adopt Modern, Efficient Development Workflows',
                    description: 'My adoption of AI-assisted development practices reflects a commitment to modern, efficient, and best-practice-aligned workflows. This approach minimizes boilerplate, standardizes project setup, and optimizes the development lifecycle, highlighting an adaptive and future-oriented skill set.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="flex-shrink-0 text-primary font-bold">•</span>
                    <div>
                      <span className="font-semibold text-primary">{item.title}:</span>
                      <p className="text-lighttext mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
