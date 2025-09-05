import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight">Nandrasana Toky</span>
            </h1>
            <p className="hero-subtitle">
              Aspirant Ingénieur IT
            </p>
            <p className="hero-description">
              Développeur Fullstack orienté backend, avec de solides compétences en DevOps. 
              J’automatise, administre et sécurise les infrastructures grâce à mon expertise en systèmes et réseaux.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes projets
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Me contacter
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
            <img src="/profile.png" alt="Mon profil" className="profile-img" />
              {/* <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="100" fill="#f3f4f6"/>
                <circle cx="100" cy="80" r="30" fill="#d1d5db"/>
                <path d="M40 180c0-33.137 26.863-60 60-60s60 26.863 60 60" fill="#d1d5db"/>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;