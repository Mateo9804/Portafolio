import React, { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const [aboutData, setAboutData] = useState({
    description: '',
    education: [],
    experience: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio/about')
        setAboutData(response.data)
      } catch (error) {
        console.error('Error fetching about data:', error)
        // Datos por defecto
        setAboutData({
          description: 'Insertarme en el mundo laboral, donde pueda dar mis primeros pasos en una empresa consolidada en el área de mis estudios académicos, y poner a prueba mis talentos y capacidades para crecer profesionalmente, y así retribuir con éxito la fe depositada en mi persona. Dispuesto a aprender nuevos lenguajes de programación, si así me lo solicitaran, para ampliar mis conocimientos actuales y volcarlos en beneficio de la empresa para así lograr sus objetivos.',
          education: [
            {
              degree: 'Ciclo Formativo de Grado Superior, Desarrollo de aplicaciones web',
              institution: 'IES Enric Valor',
              period: 'Septiembre 2023 - Junio 2026',
              website: 'https://www.iesenricvalor.es/web/va/Index.aspx'
            },
            {
              degree: 'Bachillerato',
              institution: 'Colegio San Cayetano',
              location: 'San Isidro, Argentina',
              period: '23/03/2016 – 17/12/2021',
              website: 'https://sancayetanova.edu.ar',
              mec_level: 'Nivel 4 FOF-MEC'
            }
          ],
          experience: [
            {
              position: 'Desarrollador de aplicaciones web',
              company: 'Freelance',
              period: 'Julio 2025 - Presente',
              location: 'Monóvar, Alicante, España',
              description: 'Páginas para clientes',
              skills: ['Java', 'Laravel', 'HTML5']
            },
            {
              position: 'Desarrollador de aplicaciones web',
              company: 'NeoFranquicias SL',
              employment_type: 'Jornada completa',
              period: 'Marzo 2025',
              skills: ['Laravel', 'JavaScript']
            }
          ]
        })
      }
    }
    fetchData()
  }, [])

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title fade-in-on-scroll">Sobre Mí</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0 fade-in-on-scroll">
            <img 
              src="/imagenes/fotoperfil.jpeg" 
              alt="Mateo Alejandro Vera" 
              className="profile-image"
            />
          </div>
          <div className="col-md-8 fade-in-on-scroll">
            <p className="lead mb-4">{aboutData.description}</p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <h4 className="mb-3">
                  <i className="bi bi-mortarboard me-2"></i>
                  Educación
                </h4>
                {aboutData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h5>{edu.degree}</h5>
                    <p className="text-muted mb-1">
                      {edu.institution}
                      {edu.location && ` - ${edu.location}`}
                    </p>
                    <small className="text-muted d-block mb-1">{edu.period}</small>
                    {edu.mec_level && (
                      <small className="text-muted d-block mb-1">
                        <strong>Nivel MEC:</strong> {edu.mec_level}
                      </small>
                    )}
                    {edu.website && (
                      <a 
                        href={edu.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary small"
                      >
                        <i className="bi bi-link-45deg me-1"></i>
                        Ver institución
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h4 className="mb-3">
                  <i className="bi bi-briefcase me-2"></i>
                  Experiencia
                </h4>
                {aboutData.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h5>{exp.position}</h5>
                    <p className="text-muted mb-1">
                      {exp.company}
                      {exp.employment_type && ` · ${exp.employment_type}`}
                    </p>
                    {exp.location && (
                      <p className="text-muted small mb-1">
                        <i className="bi bi-geo-alt me-1"></i>
                        {exp.location}
                      </p>
                    )}
                    <small className="text-muted d-block mb-2">{exp.period}</small>
                    {exp.description && (
                      <p className="mt-2">{exp.description}</p>
                    )}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mt-2">
                        <small className="text-muted">
                          <strong>Habilidades:</strong> {exp.skills.join(', ')}
                        </small>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

