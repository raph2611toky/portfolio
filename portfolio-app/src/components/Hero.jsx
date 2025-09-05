"use client"

import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero section-padding" id="hero">
      <div className="hero-container container">
        <div className="hero-content flex flex-col items-center">
          <div className="hero-text">
            <h1 className="hero-title text-4xl text-center">
              Bonjour, je suis <span className="highlight">Nandrasana Toky</span>
            </h1>
            <p className="hero-subtitle text-xl text-center">Aspirant Ingénieur IT</p>
            <p className="hero-description text-base text-center">
              Développeur Fullstack orienté backend, avec de solides compétences en DevOps. J'automatise, administre et
              sécurise les infrastructures grâce à mon expertise en systèmes et réseaux.
            </p>
            <div className="hero-buttons flex flex-wrap justify-center">
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              >
                Voir mes projets
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              >
                Me contacter
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <img src="/profile.png" alt="Mon profil" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
