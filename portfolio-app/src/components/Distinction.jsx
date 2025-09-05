import { useState, useEffect, useRef } from "react"
import "./Distinction.css"

const Distinctions = () => {
  const [showAllImages, setShowAllImages] = useState(false)
  const [imagePopup, setImagePopup] = useState({ isOpen: false, images: [], currentIndex: 0, title: "" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef(null)
  const trackRef = useRef(null)

  const distinctions = [
    {
      year: "2024",
      event: "Devfest Antananarivo",
      theme: "Application santé sexuelle",
      position: "1ère place",
      description:
        "Création d'une application mobile innovante pour l'éducation et la sensibilisation en santé sexuelle.",
      link: "#",//"https://www.facebook.com/share/p/1APWm9DEMe/",
      type: "mobile",
      images: [
        "/Devfest 2024/490810708_1221133790013838_8328537831037771501_n.jpg",
        "/Devfest 2024/491321728_1221134076680476_1627764399906486599_n.jpg",
        "/Devfest 2024/490744465_1221133756680508_5550424984059701568_n.jpg",
        "/Devfest 2024/491800772_1221134030013814_2836665565630815993_n.jpg",
        "/Devfest 2024/491879487_1221133773347173_1172031545493716667_n.jpg",
      ]
    },
    {
      year: "2023",
      event: "HackMaster",
      theme: "Application ville intelligente",
      position: "1ère place",
      description:
        "Développement d'une solution innovante pour optimiser la gestion urbaine avec des technologies IoT et IA.",
      link: "#",//"https://www.facebook.com/share/p/19rLMW1thF/",
      type: "hackathon",
      images: [
        "/Hackmaster/484871693_1057893599711761_504537747397505124_n.jpg",
      ]
    },
    {
      year: "2025",
      event: "HIU 2025",
      theme: "Révolution technologique",
      position: "2ème place",
      description:
        "Solution technologique disruptive pour transformer les processus traditionnels avec l'IA et blockchain.",
      link: "#",//"https://www.facebook.com/share/p/1FMXj3CccP/",
      type: "innovation",
      images: [
        "/HIU 2025/497502866_701171729548074_3921484450513823838_n.jpg",
        "/HIU 2025/496610915_701170092881571_1191641898787400923_n.jpg",
        "/HIU 2025/496649124_701171699548077_3474954719583359091_n.jpg",
        "/HIU 2025/497005009_701169356214978_228332581090972170_n.jpg",
        "/HIU 2025/490763679_122206813094151637_1058838587533897749_n.jpg",
      ]
    },
    {
      year: "2025",
      event: "Devhunt 4.0",
      theme: "Solution pour l'inclusion des personnes en situation d'handicap",
      position: "2ème place",
      description:
        "Création d'une application web pour rendre accéssible l'éducation des personnes en situation d'handicap avec l'utilisation de l'intelligence artificielle.",
      link: "#",//"https://www.facebook.com/share/p/1FMXj3CccP/",
      type: "innovation",
      images: [
        "/DEVHUNT/480970641_996223809274872_4034318321696975989_n.jpg",
      ]
    },
    {
      year: "2024",
      event: "Compétition Algorithme",
      theme: "COD-ENI",
      position: "2ème place",
      description: "Resolution des petites problèmes.",
      link: "#",//"https://www.facebook.com/photo/?fbid=122120911484459755&set=pcb.122120912114459755",//https://www.facebook.com/photo/?fbid=525633057101943&set=a.117138481284738
      type: "cybersecurity",
      images: [
        "/ALGO/481154701_615264681472882_8057673462476634688_n.jpg"
      ]
    },
    {
      year: "2025",
      event: "Webcup",
      theme: "The End Page",
      position: "3ème place",
      description: "Développement web créatif avec des technologies modernes et design UX/UI exceptionnel.",
      link: "#",//"https://www.facebook.com/share/p/15xAEaVUWi/",
      type: "web",
      images: [
        "/WEBCUP/500898076_1268133465317955_1941986275536470405_n.jpg"
      ]
    },
    {
      year: "2024",
      event: "HIU Cybersécurité",
      theme: "Sécurité informatique",
      position: "3ème place",
      description: "Développement d'outils de détection et prévention des cyberattaques pour les entreprises.",
      link: "#",
      type: "cybersecurity",
      images: [
        "/HIU cybersecurite 2024/433472217_792670789397705_4414199758593008662_n.jpg",
      ],
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 4000) // Change slide every 4 seconds
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isAutoScrolling, distinctions.length])

  // Update carousel position
  useEffect(() => {
    if (trackRef.current) {
      const slideWidth = 350 + 32 // card width + gap
      const offset = slideWidth * (currentSlide + distinctions.length)
      trackRef.current.style.transform = `translateX(-${offset}px)`
      trackRef.current.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
    }
  }, [currentSlide, isTransitioning, distinctions.length])

  // Handle infinite loop
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        if (currentSlide >= distinctions.length) {
          setCurrentSlide(0)
        } else if (currentSlide < 0) {
          setCurrentSlide(distinctions.length - 1)
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, isTransitioning, distinctions.length])

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
  }

  const goToSlide = (index) => {
    setIsTransitioning(true)
    setCurrentSlide(index)
  }

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
  }

  const getIcon = (type) => {
    switch (type) {
      case "hackathon":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 12l2 2 4-4" />
            <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
            <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
            <path d="M3 12h6m6 0h6" />
          </svg>
        )
      case "cybersecurity":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        )
      case "mobile":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        )
      case "innovation":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        )
      case "web":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        )
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        )
    }
  }

  const getPositionColor = (position) => {
    if (position.includes("1ère") || position.includes("1er")) return "gold"
    if (position.includes("2ème") || position.includes("2e")) return "silver"
    if (position.includes("3ème") || position.includes("3e")) return "bronze"
    return "finalist"
  }

  const openImagePopup = (images, title) => {
    setImagePopup({ isOpen: true, images, currentIndex: 0, title })
  }

  const closeImagePopup = () => {
    setImagePopup({ isOpen: false, images: [], currentIndex: 0, title: "" })
  }

  const nextImage = () => {
    setImagePopup((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }))
  }

  const prevImage = () => {
    setImagePopup((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
    }))
  }

  return (
    <section className="distinctions" id="distinction">
      <div className="distinctions-container">
        <div className="section-header">
          <h2 className="section-title">Mes Distinctions</h2>
          {/* <p className="section-subtitle">Participations et réussites dans les compétitions technologiques</p> */}
        </div>

        <div className="distinctions-grid">
          <button className={`auto-scroll-toggle ${!isAutoScrolling ? 'paused' : ''}`} onClick={toggleAutoScroll}>
            {isAutoScrolling ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="6" y="4" width="4" height="16"/>
                  <rect x="14" y="4" width="4" height="16"/>
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
                Play
              </>
            )}
          </button>

          <div className="carousel-container">
            <button className="carousel-nav prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>

            <div className="carousel-track" ref={trackRef}>
              {/* Render triple copies for true infinite scroll */}
              {[...distinctions, ...distinctions, ...distinctions].map((distinction, globalIndex) => {
                const actualIndex = globalIndex % distinctions.length
                return (
                <div key={globalIndex} className="distinction-card">
                  <div className="distinction-header">
                    <div className="distinction-icon">{getIcon(distinction.type)}</div>
                    <div className="distinction-year">{distinction.year}</div>
                  </div>

                  <div className="distinction-content">
                    <h3 className="distinction-event">{distinction.event}</h3>
                    <p className="distinction-theme">{distinction.theme}</p>
                    <div className={`distinction-position ${getPositionColor(distinction.position)}`}>
                      {distinction.position}
                    </div>
                    <p className="distinction-description">{distinction.description}</p>

                    {distinction.images && (
                      <div className="distinction-images">
                        <div
                          className="single-image-container"
                          onClick={() => openImagePopup(distinction.images, distinction.event)}
                        >
                          <img
                            src={distinction.images[0] || "/placeholder.svg"}
                            alt={`${distinction.event} - Image principale`}
                            className="distinction-image-main"
                          />
                          {distinction.images.length > 1 && (
                            <div className="image-counter">+{distinction.images.length - 1}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {distinction.link && distinction.link !== "#" && (
                      <div className="distinction-links">
                        <a href={distinction.link} target="_blank" rel="noopener noreferrer" className="distinction-link">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Voir plus
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                )
              })}
            </div>

            <button className="carousel-nav next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </div>

          <div className="carousel-indicators">
            {distinctions.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator-item ${index === (currentSlide % distinctions.length) ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {imagePopup.isOpen && (
          <div className="image-popup-overlay" onClick={closeImagePopup}>
            <div className="image-popup-container" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={closeImagePopup}>
                ×
              </button>

              <div className="popup-header">
                <h3>{imagePopup.title}</h3>
                <span className="image-counter-popup">
                  {imagePopup.currentIndex + 1} / {imagePopup.images.length}
                </span>
              </div>

              <div className="popup-image-container">
                <button className="popup-nav prev" onClick={prevImage}>
                  ←
                </button>

                <img
                  src={imagePopup.images[imagePopup.currentIndex] || "/placeholder.svg"}
                  alt={`${imagePopup.title} - Image ${imagePopup.currentIndex + 1}`}
                  className="popup-image"
                />

                <button className="popup-nav next" onClick={nextImage}>
                  →
                </button>
              </div>

              <div className="popup-indicators">
                {imagePopup.images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === imagePopup.currentIndex ? "active" : ""}`}
                    onClick={() => setImagePopup((prev) => ({ ...prev, currentIndex: index }))}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Distinctions
