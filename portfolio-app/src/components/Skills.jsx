import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Administration Réseau",
      skills: [
        { name: "TCP/IP, DNS, DHCP, NAT", level: 95 },
        { name: "Configuration Pare-feu", level: 90 },
        { name: "Surveillance Réseau", level: 85 },
        { name: "QoS (Qualité de Service)", level: 80 },
        { name: "SIEM, SOAR, SOC", level: 85 }
      ]
    },
    {
      title: "Administration Système",
      skills: [
        { name: "Gestion Utilisateurs & Permissions", level: 90 },
        { name: "Configuration Serveurs", level: 85 },
        { name: "VMware, Hyper-V, KVM", level: 80 },
        { name: "Bash, PowerShell, Python", level: 85 },
        { name: "LDAP & Active Directory", level: 80 }
      ]
    },
    {
      title: "Sécurité & DevOps",
      skills: [
        { name: "Sécurité Défensive", level: 90 },
        { name: "Analyse Malwares", level: 75 },
        { name: "Certificats SSL", level: 85 },
        { name: "Hébergement Sécurisé", level: 80 },
        { name: "Clustering Base de Données", level: 75 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">
            Les technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;