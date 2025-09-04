"use client"

import { useState, useEffect } from "react"
import "./Experience.css"

const Experience = () => {
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const experienceSection = document.querySelector(".experience")
    if (experienceSection) {
      observer.observe(experienceSection)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Développeur backend et DevSeOps",
      company: "Diofèvre ",
      type: "télétravail",
      period: "mars 2025 - juillet 2025",
      location: "Fianarantsoa",
      description:
        "Contribution au développement backend et à l'automation des déploiements et la sécurisation d'applications web.",
      technologies: [],
      images: [],
    },
    {
      title: "Stagiaire en Backend et DevOps",
      company: "INNOV-T Fianarantsoa",
      type: "Stage",
      period: "Septembre 2024 - février 2024",
      location: "Fianarantsoa",
      description:
        "Développement backend et responsable de l'optimisation des processus DevSecOps des applications web.",
      technologies: [],
      images: [],
    },
    {
      title: "Stagiaire en Informatique",
      company: "REGRIGEPÊCHE",
      type: "Stage",
      period: "Septembre 2023 - Novembre 2023",
      location: "Mahajanga",
      description:
        "Participation à des projets de développement, mettant en œuvre des compétences de base en programmation.",
      technologies: [],
      images: [],
    },
  ]

  const openGallery = (images, startIndex = 0) => {
    setSelectedGallery(images)
    setCurrentImageIndex(startIndex)
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length)
  }

  const handleWheel = (e) => {
    e.preventDefault()
    if (e.deltaY > 0) {
      nextImage()
    } else {
      prevImage()
    }
  }

  return (
    <section className={`experience ${isVisible ? "animate-in" : ""}`} id="experience">
      <div className="experience-container">
        {/* <div className="section-header slide-in-right">
          <h2 className="section-title">Mon Expérience Professionnelle</h2>
        </div> */}

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="timeline-connector"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="title-group">
                      <h3 className="job-title">{exp.title}</h3>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h4 className="company">
                    {exp.company} - {exp.location}
                  </h4>
                  <p className="description">{exp.description}</p>

                  {exp.images && exp.images.length > 0 && (
                    <div className="experience-gallery">
                      <div className="gallery-preview" onClick={() => openGallery(exp.images, 0)}>
                        <div className="main-image">
                          <img src={exp.images[0] || "/placeholder.svg"} alt={`${exp.title} - Image principale`} />
                          <div className="image-overlay">
                            <span className="view-more">Voir plus ({exp.images.length})</span>
                          </div>
                        </div>
                        <div className="pinned-images">
                          {exp.images.slice(1, 3).map((img, imgIndex) => (
                            <div key={imgIndex} className="pinned-image">
                              <img src={img || "/placeholder.svg"} alt={`${exp.title} - Image ${imgIndex + 2}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()} onWheel={handleWheel}>
            <button className="close-gallery" onClick={closeGallery}>
              ×
            </button>
            <button className="gallery-nav prev" onClick={prevImage}>
              ‹
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              ›
            </button>

            <div className="gallery-image-container">
              <img
                src={selectedGallery[currentImageIndex] || "/placeholder.svg"}
                alt={`Image ${currentImageIndex + 1}`}
                className="gallery-image"
              />
            </div>

            <div className="gallery-indicators">
              {selectedGallery.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
