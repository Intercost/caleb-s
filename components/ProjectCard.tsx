'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

interface ProjectCardProps {
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  link: string
  external?: boolean
}

export default function ProjectCard({
  title,
  description,
  fullDescription,
  image,
  tags,
  link,
  external = false,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <>
      <div className="project-card bg-darksurface p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-darksurface hover:border-primary">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="project-toggle w-full text-left focus:outline-none flex justify-between items-center py-2 group"
          aria-expanded={isExpanded}
        >
          <h4 className="text-2xl font-semibold text-lighttext mb-0 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <span className="text-primary text-2xl font-bold toggle-icon group-hover:text-secondary transition-colors">
            {isExpanded ? '−' : '+'}
          </span>
        </button>

        {isExpanded && (
          <div className="project-details mt-4">
            <div
              className="relative w-full h-48 mb-4 rounded-md overflow-hidden border border-darksurface/50 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-mutedtext text-sm mb-4">{description}</p>
            <p className="text-lighttext mb-4">{fullDescription}</p>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {link && (
              <a
                href={link}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noopener noreferrer' : ''}
                className="mt-4 inline-block bg-primary hover:bg-secondary text-lighttext font-bold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75"
              >
                {external ? 'View Site →' : 'View →'}
              </a>
            )}
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <Lightbox
          src={image}
          alt={title}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  )
}
