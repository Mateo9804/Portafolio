import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const Inicio = () => {
  const { language } = useConfig()
  const t = translations[language]

  const summaries = {
    es: 'Desarrollador apasionado por crear soluciones web innovadoras con tecnologías modernas. Con experiencia en React, JavaScript y desarrollo backend con PHP y Laravel, me encanta transformar ideas en productos funcionales y eficientes. Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre siguiendo las mejores prácticas de desarrollo. Disfruto trabajando tanto en el frontend como en el backend, creando aplicaciones completas desde cero. Siempre estoy dispuesto a aprender nuevas tecnologías, enfrentar nuevos desafíos y colaborar con equipos talentosos para lograr resultados excepcionales.',
    en: 'Developer passionate about creating innovative web solutions with modern technologies. With experience in React, JavaScript and backend development with PHP and Laravel, I love transforming ideas into functional and efficient products. My focus is on writing clean, maintainable and scalable code, always following best development practices. I enjoy working in both frontend and backend, creating complete applications from scratch. I am always willing to learn new technologies, face new challenges and collaborate with talented teams to achieve exceptional results.'
  }

  const [portfolioData, setPortfolioData] = useState({
    name: 'Mateo Alejandro Vera',
    title: language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer',
    location: 'Monóvar, Alicante, España',
    available: true,
    summary: summaries[language],
    github: 'https://github.com/Mateo9804',
    linkedin: 'https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/'
  })

  useEffect(() => {
    setPortfolioData(prev => ({
      ...prev,
      title: language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer',
      summary: summaries[language]
    }))
  }, [language])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio')
        setPortfolioData(prev => ({
          ...prev,
          ...response.data,
          title: language === 'es' ? (response.data.title || 'Desarrollador Full Stack') : (response.data.title || 'Full Stack Developer'),
          summary: summaries[language],
          github: response.data.github || prev.github,
          linkedin: response.data.linkedin || prev.linkedin
        }))
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="inicio-container">
      {/* Sección superior con foto y código */}
      <div className="inicio-hero-section">
        <div className="profile-image-container">
          <img 
            src="/imagenes/fotoperfil.jpeg" 
            alt={portfolioData.name}
            className="profile-image-circle"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200?text=MP'
            }}
          />
        </div>
        <div className="code-card">
          <div className="code-content">
            <div className="code-line">
              <span className="line-number">1</span>
              <span className="code-text">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">{t.developer}</span> = {'{'}
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <span className="code-text">
                {'  '}
                <span className="code-property">{t.name}</span> :{' '}
                <span className="code-string">"{portfolioData.name}"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">3</span>
              <span className="code-text">
                {'  '}
                <span className="code-property">{t.title}</span> :{' '}
                <span className="code-string">"{portfolioData.title}"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              <span className="code-text">
                {'  '}
                <span className="code-property">{t.location}</span> :{' '}
                <span className="code-string">"{portfolioData.location}"</span>,
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">5</span>
              <span className="code-text">
                {'  '}
                <span className="code-property">{t.available}</span> :{' '}
                <span className="code-boolean">{portfolioData.available ? 'true' : 'false'}</span>
              </span>
            </div>
            <div className="code-line">
              <span className="line-number">6</span>
              <span className="code-text">{'}'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior con descripción y botones */}
      <div className="inicio-about-section">
        <h2 className="about-title">{portfolioData.title}</h2>
        <p className="about-description">{portfolioData.summary}</p>

        <div className="social-buttons">
          <a 
            href={portfolioData.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button github-button"
          >
            <img src="/imagenes/github.webp" alt="GitHub" className="social-icon" />
            <span>GitHub</span>
          </a>
          <a 
            href={portfolioData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-button linkedin-button"
          >
            <img src="/imagenes/linkedin.webp" alt="LinkedIn" className="social-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Inicio

