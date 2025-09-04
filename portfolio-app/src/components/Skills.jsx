"use client"

import { useState, useEffect } from "react"
import "./Skills.css"

const Skills = () => {
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

    const skillsSection = document.querySelector(".skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      id: "admin",
      title: "Administration des Systèmes et des Réseaux",
      icon: "🖥️",
      color: "#3b82f6",
      skills: [
        "Configuration serveurs Linux/Windows",
        "Gestion des pare-feu et IDS/IPS", 
        "LDAP et Active Directory",
        "Monitoring réseau (Nagios, Zabbix)",
        "Haute disponibilité et clustering",
        "Architectures réseau sécurisées",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Sécurisation",
      icon: "🔒",
      skills: [
        "Docker, Kubernetes",
        "Git, GitHub, GitLab",
        "Jenkins CI/CD",
        "SIEM surveillance temps réel",
        "Cloud (AWS, Azure, Google Cloud)",
        "Analyse des vulnérabilités",
      ],
    },
    {
      id: "dev",
      title: "Développement",
      icon: "💻",
      skills: [
        "Frameworks : Django, Laravel, Node.js",
        "SGBD : MySQL, PostgreSQL, MongoDB",
        "API : REST, GraphQL",
        "Applications web et mobile",
        "Applications desktop avec QT",
        "Tests de vulnérabilité",
      ],
    },
  ]

  const programmingLanguages = [
    {
      name: "Python",
      level: 91,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      level: 87,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "C++",
      level: 79,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      level: 74,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C#",
      level: 73,
      logo: "https://w7.pngwing.com/pngs/83/268/png-transparent-csharp-line-logo-icon.png",
    },
    {
      name: "Perl",
      level: 50,
      logo: "https://img.static.bianchengbaodian.com/uploads/php/perl-tutorial.png",
    },
  ]

  return (
    <section className={`skills ${isVisible ? "animate-in" : ""}`} id="skills">
      <div className="skills-container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">Expertise technique dans trois domaines clés</p>
        </div>

        <div className="skills-cards-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="skill-category-card"
              style={{ 
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="card-header">
                <div className="category-icon">
                  <span>{category.icon}</span>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <ul className="skills-list-modern">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="skill-item-modern"
                    style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-bullet-round"></div>
                    <span className="skill-text-modern">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="programming-languages zoom-in">
          <h3 className="languages-title">Langages de Programmation</h3>
          <div className="languages-grid">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="language-item rotate-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="language-logo">
                  <img src={lang.logo || "/placeholder.svg"} alt={lang.name} />
                </div>
                <h4 className="language-name">{lang.name}</h4>
                <div className="language-level">{lang.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills