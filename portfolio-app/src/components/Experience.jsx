import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Projets Académiques Avancés",
      company: "ENI Fianarantsoa",
      period: "Janvier 2024 - Présent",
      description: "Développement d'applications mobiles avec Django, analyse de malwares, haute disponibilité web et clustering de bases de données. Synchronisation temporelle des serveurs avec NTP.",
      technologies: ["Django", "Python", "NTP", "Clustering", "Analyse Malwares"]
    },
    {
      title: "Administration Système & Sécurité",
      company: "ENI Fianarantsoa",
      period: "2023",
      description: "Surveillance système Windows, surveillance à distance avec EON, développement de pare-feu Unix avec Python et iptables, gestion LDAP et Active Directory.",
      technologies: ["Python", "iptables", "LDAP", "Active Directory", "EON"]
    },
    {
      title: "Développement Desktop",
      company: "ENI Fianarantsoa",
      period: "Septembre 2022",
      description: "Développement d'une application desktop pour agence de voyage utilisant Qt. Première expérience en développement d'interfaces graphiques professionnelles.",
      technologies: ["Qt", "C++", "Interface Graphique", "Base de Données"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Mon Expérience</h2>
          <p className="section-subtitle">
            Un parcours riche en apprentissages et en défis techniques
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h4 className="company">{exp.company}</h4>
                  <p className="description">{exp.description}</p>
                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;