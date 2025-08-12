import './Distinction.css';

const Distinctions = () => {
  const distinctions = [
    {
      year: "2023",
      event: "HackMaster",
      theme: "Application ville intelligente",
      position: "1ère place",
      description: "Développement d'une solution innovante pour optimiser la gestion urbaine avec des technologies IoT et IA.",
      link: "https://www.facebook.com/share/p/19rLMW1thF/",
      type: "hackathon"
    },
    {
      year: "2024 (nov)",
      event: "Hackathon Cybersécurité",
      theme: "Organisé par Besides",
      position: "Finaliste (Top 10 Madagascar)",
      description: "Conception d'une solution de sécurité avancée pour la protection des infrastructures critiques.",
      link: "https://www.facebook.com/photo/?fbid=122120911484459755&set=pcb.122120912114459755",
      type: "cybersecurity"
    },
    {
      year: "2024",
      event: "HIU Cybersécurité",
      theme: "Sécurité informatique",
      position: "3ème place",
      description: "Développement d'outils de détection et prévention des cyberattaques pour les entreprises.",
      link: "#",
      type: "cybersecurity"
    },
    {
      year: "2024",
      event: "Devfest Antananarivo",
      theme: "Application santé sexuelle",
      position: "1ère place",
      description: "Création d'une application mobile innovante pour l'éducation et la sensibilisation en santé sexuelle.",
      link: "#",
      type: "mobile"
    },
    {
      year: "2025",
      event: "Hackathon Inter-Universitaire",
      theme: "Révolution technologique",
      position: "2ème place",
      description: "Solution technologique disruptive pour transformer les processus traditionnels avec l'IA et blockchain.",
      link: "https://www.facebook.com/share/p/1FMXj3CccP/",
      type: "innovation"
    },
    {
      year: "2025",
      event: "Webcup",
      theme: "The End Page",
      position: "3ème place",
      description: "Développement web créatif avec des technologies modernes et design UX/UI exceptionnel.",
      link: "https://www.facebook.com/share/p/15xAEaVUWi/",
      type: "web"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'hackathon':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 12l2 2 4-4"/>
            <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
            <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
            <path d="M3 12h6m6 0h6"/>
          </svg>
        );
      case 'cybersecurity':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        );
      case 'innovation':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 12l2 2 4-4"/>
            <circle cx="12" cy="12" r="9"/>
          </svg>
        );
      case 'web':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        );
    }
  };

  const getPositionColor = (position) => {
    if (position.includes('1ère') || position.includes('1er')) return 'gold';
    if (position.includes('2ème') || position.includes('2e')) return 'silver';
    if (position.includes('3ème') || position.includes('3e')) return 'bronze';
    return 'finalist';
  };

  return (
    <section className="distinctions" id="distinction">
      <div className="distinctions-container">
        <div className="section-header">
          <h2 className="section-title">Mes Distinctions</h2>
          <p className="section-subtitle">
            Mes participations et réussites dans les compétitions technologiques
          </p>
        </div>
        
        <div className="distinctions-grid">
          {distinctions.map((distinction, index) => (
            <div key={index} className="distinction-card">
              <div className="distinction-header">
                <div className="distinction-icon">
                  {getIcon(distinction.type)}
                </div>
                <div className="distinction-year">{distinction.year}</div>
              </div>
              
              <div className="distinction-content">
                <h3 className="distinction-event">{distinction.event}</h3>
                <p className="distinction-theme">{distinction.theme}</p>
                <div className={`distinction-position ${getPositionColor(distinction.position)}`}>
                  {distinction.position}
                </div>
                <p className="distinction-description">{distinction.description}</p>
                
                {distinction.link && distinction.link !== '#' && (
                  <div className="distinction-links">
                    <a href={distinction.link} target="_blank" rel="noopener noreferrer" className="distinction-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Voir plus
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="distinctions-stats">
          <div className="stat-item">
            <h3>6</h3>
            <p>Compétitions</p>
          </div>
          <div className="stat-item">
            <h3>3</h3>
            <p>Premières places</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Finaliste</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distinctions;