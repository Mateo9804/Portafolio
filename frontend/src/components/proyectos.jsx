import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const Proyectos = () => {
  const { language } = useConfig()
  const t = translations[language]

  const projectDescriptions = {
    es: 'Plataforma digital especializada en conectar a desarrolladores y programadores con empresas que buscan talento tecnológico. El proyecto nace con el objetivo de ofrecer un espacio profesional más preciso y eficiente que los portales de empleo generalistas, facilitando a las empresas el acceso a perfiles calificados y permitiendo a los desarrolladores mostrar sus habilidades de forma clara y diferenciada.',
    en: 'Digital platform specialized in connecting developers and programmers with companies looking for tech talent. The project was born with the goal of offering a more precise and efficient professional space than generalist job portals, facilitating companies access to qualified profiles and allowing developers to showcase their skills clearly and distinctively.'
  }
  // Datos por defecto para mostrar inmediatamente
  const getDefaultProjects = () => [{
    id: 1,
    title: 'JobBridge',
    description: projectDescriptions[language],
    technologies: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Laravel', 'PHP', 'Docker', 'Railway', 'Vercel'],
    github: 'https://github.com/Mateo9804/JobBridge',
    demo: 'https://job-bridge-alpha.vercel.app'
  }]

  const [projects, setProjects] = useState(getDefaultProjects())

  useEffect(() => {
    setProjects(getDefaultProjects())
  }, [language])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio/projects')
        // Solo actualizar si la respuesta tiene datos válidos
        if (response.data && response.data.length > 0) {
          setProjects(response.data.map(project => ({
            ...project,
            description: projectDescriptions[language]
          })))
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Mantener los datos por defecto si hay error
      }
    }
    fetchProjects()
  }, [language])

  return (
    <div className="proyectos-container">
      <div className="code-header">
        <span className="code-keyword">const</span>{' '}
        <span className="code-variable">{t.variableProyectos}</span> = [
      </div>

      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge-project">{tech}</span>
            ))}
          </div>

          <div className="project-actions">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link codigo-link"
            >
              <img src="/imagenes/github.webp" alt="GitHub" className="project-link-icon" />
              <span>{t.code}</span>
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link demo-link"
              >
                <span className="material-icons project-link-icon">open_in_new</span>
                <span>{t.demo}</span>
              </a>
            )}
          </div>
        </div>
      ))}

      <div className="code-footer">
        ]
      </div>
    </div>
  )
}

export default Proyectos
