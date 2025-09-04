import "./Education.css"

const Education = () => {
  const educationData = [
    {
      degree: "Master Professionnel",
      field: "Administration Système et Réseau",
      school: "ENI Fianarantsoa",
      period: "2024 - Maintenant",
      status: "En cours",
    },
    {
      degree: "Licence Professionnelle",
      field: "Administration Système et Réseau",
      school: "ENI Fianarantsoa",
      period: "2021 - 2024",
      status: "Diplômé",
    },
  ]

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Mes Études</h2>
          <p className="section-subtitle">Mon parcours académique en administration système et réseau</p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3 className="degree-title">{edu.degree}</h3>
                <span className="period">{edu.period}</span>
              </div>
              <h4 className="field">{edu.field}</h4>
              <p className="school">{edu.school}</p>
              <span className={`status ${edu.status === "En cours" ? "current" : "completed"}`}>{edu.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
