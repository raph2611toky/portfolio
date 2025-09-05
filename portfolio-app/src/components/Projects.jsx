"use client"

import { useEffect, useRef, useState } from "react"
import "./Projects.css"

const Projects = () => {
  const projectsRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          } else {
            entry.target.classList.remove("animate-in")
            entry.target.classList.add("animate-out")
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const projectCards = projectsRef.current?.querySelectorAll(".project-card")
    projectCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "WifiZone Area",
      description:
        "API REST pour l'achat de connexion en ligne sur un centre de partage de connexion locale depuis internet en attribuant des forfaits correspondant à son achat au client qui appartiennent à la zone de connexion Mikrotik. Système de gestion des accès WiFi avec attribution automatique de forfaits selon les achats effectués.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Mikrotik", "Python", "MySQL", "Django"],
      link: "#",
      github: "",
    },
    {
      title: "Application de Streaming Multimédia",
      description:
        "Plateforme de streaming développée avec React.js (Vite) pour le frontend et Django pour le backend. L'application permet de regarder des vidéos avec un contrôle avancé du flux : gestion de la qualité, vitesse de lecture, sous-titres, suivi de la langue, segmentation des vidéos et réglage du volume. Interface utilisateur moderne et performante.",
      image: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["React.js (Vite)", "Django", "Python", "Contrôle de flux", "Sous-titres"],
      link: "#",
      github: "",
    },
    {
      title: "Sexual AI",
      description:
        "Intelligence artificielle dédiée à la santé sexuelle, offrant des conseils fiables, personnalisés et adaptés aux besoins de chacun. Utilise le machine learning et le traitement du langage naturel pour analyser les demandes et proposer des recommandations précises, éducatives et responsables.",
      image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "React.js (Vite)", "NLP", "Django"],
      link: "#",
      github: "",
    },

    {
      title: "Learning Management System - LMS",
      description:
        "API REST de gestion des formations en ligne avec un système de certification, de badges, et des examens en ligne ou hybrides avec un système de télésurveillance personnalisé pour les cours et les examens qui identifie les gestes suspects de tricherie. Plateforme complète d'e-learning avec suivi avancé.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Django", "Télésurveillance", "Certification", "E-learning"],
      link: "#",
      github: "",
    },
    {
      title: "Applicant Tracking System - ATS",
      description:
        "API REST de recherche d'emploi automatique en ligne qui, à partir de recherches personnalisées, combine toutes les recherches dans les sites d'emploi (LinkedIn, Jooble, etc.) agissant comme un agent pour plus d'efficacité et de rapidité. Système intelligent d'agrégation d'offres d'emploi avec matching automatique.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Web Scraping", "API LinkedIn", "Machine Learning", "Django"],
      link: "#",
      github: "",
    },
    {
      title: "Application Mobile Réseau Social",
      description:
        "Développement d'une application mobile pour mini-réseau social utilisant Django comme backend avec fonctionnalités sociales complètes : partage de posts, système de likes/commentaires, messagerie instantanée, profils utilisateurs, fil d'actualité personnalisé et notifications push en temps réel.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Django", "React Native", "API REST", "WebSocket", "Push Notifications"],
      link: "#",
      github: "",
    },
    {
      title: "Ma Cité d'Âme Verte",
      description:
        "Plateforme écologique pour la gestion et promotion d'initiatives environnementales urbaines. Application web permettant aux citoyens de proposer, suivre et participer à des projets verts dans leur ville : jardins communautaires, recyclage, covoiturage, événements écologiques avec système de gamification et récompenses.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Vue.js", "Laravel", "Géolocalisation", "Gamification", "Écologie"],
      link: "#",
      github: "",
    },
    {
      title: "Forum de Partage",
      description:
        "Plateforme de forum communautaire avec système de catégories avancé, modération automatique, système de réputation utilisateur, recherche intelligente, notifications en temps réel et intégration de médias. Interface moderne avec support markdown et système de votes pour les contributions.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["PHP", "MySQL", "JavaScript", "Modération IA", "Markdown"],
      link: "#",
      github: "",
    },
    {
      title: "Gestion de Stock",
      description:
        "Système complet de gestion d'inventaire avec suivi en temps réel des stocks, alertes automatiques de réapprovisionnement, génération de rapports analytiques, gestion multi-entrepôts, codes-barres/QR codes, et tableau de bord avec indicateurs de performance. Interface intuitive pour la gestion quotidienne.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Laravel", "MySQL", "Chart.js", "Codes-barres", "Analytics"],
      link: "#",
      github: "",
    },
  ]

  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="projects animate-on-scroll" id="projects" ref={projectsRef}>
      <div className="projects-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">Découvrez quelques-unes de mes réalisations récentes</p>
        </div>

        <div className={`projects-grid ${currentProjects.length <= 3 ? "single-row" : ""}`}>
          {currentProjects.map((project, index) => (
            <div
              key={startIndex + index}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a href={project.github} className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
              Précédent
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-number ${currentPage === page ? "active" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className={`pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Suivant
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
