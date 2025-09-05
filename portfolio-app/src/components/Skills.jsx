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
      title: "Administration des Systèmes et Réseaux",
      icon: "🖥️",
      color: "#3b82f6",
      skills: [
        "Gestion avancée des pare-feu (pfSense, Fortinet, Palo Alto)",
        "Détection & prévention d’intrusions (Snort, Suricata, Zeek)",
        "Monitoring & centralisation des logs (ELK, Wazuh, Graylog)",
        "SIEM d’entreprise (Splunk, AlienVault, QRadar)",
        "Orchestration de la réponse (SOAR : TheHive, Cortex, Shuffle)",
        "Threat Hunting & analyse forensique (Volatility, MISP, YARA)",
        "Haute disponibilité & sécurité réseau (Clustering, VPN, Zero Trust)",
      ],
    },
    {
      id: "devops",
      title: "DevOps, Cloud & Sécurité",
      icon: "⚙️",
      color: "#10b981",
      skills: [
        "Containers & orchestration (Docker, Kubernetes, OpenShift)",
        "CI/CD & automatisation (Jenkins, GitLab CI, ArgoCD)",
        "Infrastructure as Code (Terraform, Ansible, Helm)",
        "Cloud computing & services managés (AWS, Azure, GCP)",
        "Observabilité & logs centralisés (Prometheus, Grafana, ELK)",
        "Sécurité & gestion des vulnérabilités (Nmap, Nessus, OpenVAS)",
        "Zero Trust & gestion des accès (Vault, IAM, SSO, MFA)",
      ],
    },
    {
      id: "dev",
      title: "Développement Logiciel",
      icon: "💻",
      color: "#f59e0b",
      skills: [
        "Développement backend robuste (Django, Node.js, Laravel)",
        "Frontend moderne & réactif (React, Vue.js, TailwindCSS)",
        "Bases de données SQL & NoSQL (MySQL, PostgreSQL, MongoDB)",
        "Conception et intégration d’API sécurisées (REST, GraphQL)",
        "Applications multiplateformes (Web, Mobile, Desktop avec Flutter/Qt)",
        "Tests automatisés & sécurité applicative (JUnit, PyTest, OWASP)",
        "Collaboration & gestion de versions (Git, GitHub, GitLab)",
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
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">Expertise technique dans trois domaines clés</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="skill-card"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  <span>{category.icon}</span>
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>

              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.2 + skillIndex * 0.05}s` }}
                  >
                    <div className="skill-bullet"></div>
                    <span className="skill-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h3 className="languages-title">Langages de Programmation</h3>
          <div className="languages-grid">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="language-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="language-logo">
                  <img src={lang.logo || "/placeholder.svg"} alt={lang.name} />
                </div>
                <h4 className="language-name">{lang.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
