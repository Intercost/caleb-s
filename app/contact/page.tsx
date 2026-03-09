import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Caleb Howard | Contact',
  description: 'Get in touch with Caleb Howard. Reach out via WhatsApp or email.',
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24 px-4 bg-darkbg">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-lighttext mb-10 text-center md:text-left">
              Get in Touch
            </h2>
            <div className="section-separator mx-auto md:mx-0"></div>

            <p className="text-lighttext text-lg mb-8 text-center md:text-left">
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out through the options below:
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 mt-12">
              {/* WhatsApp */}
              <a
                href="https://wa.me/254702643800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-darksurface hover:bg-primary/20 p-5 rounded-lg shadow-lg transition-all duration-300 w-full md:w-auto"
              >
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.52 3.4 1.49 4.87L2 22l5.24-1.38c1.43.78 3.04 1.25 4.8 1.25 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm.04 18.06c-1.48 0-2.9-.4-4.14-1.15l-.29-.17-3.04.8 1.02-2.95-.19-.31c-.82-1.31-1.26-2.82-1.26-4.47C3.96 7.64 7.63 3.97 12.04 3.97c4.4 0 7.99 3.59 7.99 7.99 0 4.4-3.59 7.99-7.99 7.99zm-2.86-5.44c-.13-.22-.38-.34-.64-.34-.23 0-.46.06-.66.28-.2.22-.64.84-.71 1.01-.08.17-.15.18-.3.04-.15-.15-.65-.24-1.24-.77-.49-.43-.82-.94-1.09-1.39-.27-.45-.03-.69.21-.93.19-.19.34-.38.48-.56.14-.19.2-.33.3-.54.09-.2.05-.38-.02-.54-.07-.16-.64-1.55-.88-2.12-.24-.58-.49-.48-.68-.48-.2 0-.44-.04-.68-.04-.24 0-.63.08-.96.46-.32.37-1.24 1.21-1.24 2.96 0 1.75 1.27 3.44 1.45 3.69.18.25 2.45 3.78 5.92 5.09 3.47 1.31 3.53.88 4.19.82.66-.06 2.03-.83 2.32-1.63.29-.8.29-1.48.2-1.63-.09-.15-.35-.24-.6-.36z" />
                </svg>
                <span className="text-lighttext text-xl font-medium">+254 702 643800</span>
              </a>

              {/* Email */}
              <a
                href="mailto:calebachongo@gmail.com"
                className="flex items-center space-x-3 bg-darksurface hover:bg-primary/20 p-5 rounded-lg shadow-lg transition-all duration-300 w-full md:w-auto"
              >
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-lighttext text-xl font-medium">calebachongo@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
