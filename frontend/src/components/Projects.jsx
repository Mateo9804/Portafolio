import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio/projects')
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Proyectos por defecto
        setProjects([
          {
            id: 1,
            title: 'JobBridge',
            description: 'Plataforma digital especializada en conectar a desarrolladores y programadores con empresas que buscan talento tecnológico.',
            technologies: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Laravel', 'PHP', 'Docker', 'Railway', 'Vercel'],
            github: 'https://github.com/Mateo9804/JobBridge',
            demo: 'https://job-bridge-alpha.vercel.app'
          },
          {
            id: 2,
            title: 'ZetaCuts',
            description: 'Plataforma digital completa para la gestión de una barbería que permite agendar citas, vender productos y administrar usuarios.',
            technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Docker', 'Laravel', 'Render'],
            github: 'https://github.com/Proyectos-completos/ZetaCuts',
            demo: 'https://zetacuts-frontend-hdqr.onrender.com/'
          },
          {
            id: 3,
            title: 'Angax',
            description: 'Red social fitness para el seguimiento del entrenamiento. Desarrollé el frontend y parte del backend (progreso y entrenadores). Incluye rutinas compartidas y chatbot inteligente.',
            technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Docker', 'Laravel', 'Render'],
            github: 'https://github.com/Angelation/Angax',
            demo: 'https://angax-frontend.onrender.com/'
          }
        ])
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in-on-scroll">Proyectos</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 fade-in-on-scroll">
              <div className="card project-card card-hover-effect">
                <div className="project-image">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="bi bi-github me-1"></i>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

