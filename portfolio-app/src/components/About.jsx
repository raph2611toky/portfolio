import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">À propos de moi</h2>
          <p className="section-subtitle">
            Découvrez mon parcours et ma passion pour le développement
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Spécialisé en administration système et réseau avec une forte expertise en sécurité informatique. 
              Mon approche combine maîtrise technique approfondie et vision stratégique pour sécuriser et 
              optimiser les infrastructures IT.
            </p>
            <p>
              Actuellement en Master professionnel, je développe mes compétences en analyse de malwares, 
              clustering de bases de données et haute disponibilité. Chaque projet renforce ma capacité 
              à concevoir des solutions robustes et sécurisées.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projets réalisés</p>
              </div>
              <div className="stat-item">
                <h3>4+</h3>
                <p>Années d'expérience</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Sécurité garantie</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
                <rect width="300" height="400" rx="20" fill="#f8fafc"/>
                <circle cx="150" cy="120" r="50" fill="#e2e8f0"/>
                <rect x="50" y="200" width="200" height="8" rx="4" fill="#e2e8f0"/>
                <rect x="50" y="220" width="150" height="8" rx="4" fill="#e2e8f0"/>
                <rect x="50" y="240" width="180" height="8" rx="4" fill="#e2e8f0"/>
                <rect x="50" y="280" width="100" height="30" rx="15" fill="#3b82f6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;