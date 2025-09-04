export const initGlobalAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target

        // Different animations for each section
        switch (section.id) {
          case "hero":
            section.classList.add("animate-hero-entrance")
            break
          case "skills":
            section.classList.add("animate-skills-cascade")
            break
          case "experience":
            section.classList.add("animate-experience-timeline")
            break
          case "distinction":
            section.classList.add("animate-distinction-reveal")
            break
          case "education":
            section.classList.add("animate-education-grid")
            break
          default:
            section.classList.add("animate-default-fade")
        }
      } else {
        // Remove animations when section leaves viewport
        entry.target.classList.remove(
          "animate-hero-entrance",
          "animate-skills-cascade",
          "animate-experience-timeline",
          "animate-distinction-reveal",
          "animate-education-grid",
          "animate-default-fade",
        )
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })

  return observer
}
