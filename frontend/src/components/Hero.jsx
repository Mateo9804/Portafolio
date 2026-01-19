import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hero = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: 'Mateo Alejandro Vera',
    title: 'Desarrollador Full Stack',
    summary: 'Desarrollador apasionado por crear soluciones web innovadoras con tecnologías modernas.'
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio')
        setPortfolioData(response.data)
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      }
    }
    fetchData()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{portfolioData.name}</h1>
        <p className="hero-subtitle">{portfolioData.title}</p>
        {portfolioData.location && (
          <p className="hero-location">
            <i className="bi bi-geo-alt me-2"></i>
            {portfolioData.location}
          </p>
        )}
        <p className="hero-description">{portfolioData.summary}</p>
        <div className="hero-buttons">
          <button 
            className="btn btn-light"
            onClick={() => scrollToSection('projects')}
          >
            Ver Proyectos
          </button>
          <button 
            className="btn btn-outline-light"
            onClick={() => {
              const footer = document.querySelector('.footer')
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Contactar
          </button>
        </div>
        <div className="hero-social">
          <a 
            href={portfolioData.linkedin || 'https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/'} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a 
            href={portfolioData.github || 'https://github.com/Mateo9804'} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

