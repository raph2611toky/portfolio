import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Application Desktop Agence de Voyage",
      description: "Application desktop complète développée avec Qt pour la gestion d'une agence de voyage avec interface utilisateur moderne.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Qt", "C++", "Interface Graphique", "Base de Données"],
      link: "#",
      github: "#"
    },
    {
      title: "Surveillance Système Windows",
      description: "Système de surveillance avancé pour monitorer les ressources et performances des systèmes Windows en temps réel.",
      image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Windows API", "Monitoring", "EON"],
      link: "#",
      github: "#"
    },
    {
      title: "Pare-feu Unix avec Python",
      description: "Développement d'un système de pare-feu personnalisé pour Unix utilisant Python et iptables pour la sécurité réseau.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "iptables", "Unix", "Sécurité Réseau"],
      link: "#",
      github: "#"
    },
    {
      title: "Gestion LDAP & Active Directory",
      description: "Système de gestion des sessions et accès utilisateurs intégrant LDAP et Active Directory pour l'authentification centralisée.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["LDAP", "Active Directory", "Authentification", "Gestion Utilisateurs"],
      link: "#",
      github: "#"
    },
    {
      title: "Application Mobile Réseau Social",
      description: "Développement d'une application mobile pour mini-réseau social utilisant Django comme backend avec fonctionnalités sociales complètes.",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Django", "Python", "Mobile", "API REST"],
      link: "#",
      github: "#"
    },
    {
      title: "Analyse de Malwares",
      description: "Système d'analyse statique et dynamique des malwares pour la détection et classification des menaces de sécurité.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "Analyse Statique", "Analyse Dynamique", "Sécurité"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-subtitle">
            Découvrez quelques-unes de mes réalisations récentes
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                    <a href={project.github} className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;