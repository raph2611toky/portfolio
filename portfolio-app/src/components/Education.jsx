import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Master Professionnel",
      field: "Administration Système et Réseau",
      school: "ENI Fianarantsoa",
      period: "2024 - Maintenant",
      status: "En cours"
    },
    {
      degree: "Licence Professionnelle",
      field: "Administration Système et Réseau",
      school: "ENI Fianarantsoa",
      period: "2021 - 2024",
      status: "Diplômé"
    },
    {
      degree: "Baccalauréat Série C",
      field: "Sciences Mathématiques",
      school: "Saint Gabriel Mahajanga",
      period: "2020",
      status: "Diplômé"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Formation</h2>
          <p className="section-subtitle">
            Mon parcours académique en administration système et réseau
          </p>
        </div>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <div className="education-card">
                  <div className="education-header">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <span className="period">{edu.period}</span>
                  </div>
                  <h4 className="field">{edu.field}</h4>
                  <p className="school">{edu.school}</p>
                  <span className={`status ${edu.status === 'En cours' ? 'current' : 'completed'}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;