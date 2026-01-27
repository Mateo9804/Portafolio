import React, { useEffect, useState } from 'react'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const Proyectos = () => {
  const { language } = useConfig()
  const t = translations[language]

  const projectDescriptions = {
    es: {
      jobbridge: 'Plataforma digital especializada en conectar a desarrolladores y programadores con empresas que buscan talento tecnológico. El proyecto nace con el objetivo de ofrecer un espacio profesional más preciso y eficiente que los portales de empleo generalistas, facilitando a las empresas el acceso a perfiles calificados y permitiendo a los desarrolladores mostrar sus habilidades de forma clara y diferenciada.',
      zetacuts: 'Plataforma digital completa para la gestión de una barbería que permite agendar citas, vender productos y administrar usuarios. Desarrollé el backend completo y parte del frontend, incluyendo funcionalidades avanzadas de gestión de citas, inventario de productos y sistema de usuarios.',
      angax: 'Red social fitness para el seguimiento integral del entrenamiento. Permite crear y compartir rutinas, visualizar progresos y conectar con una comunidad activa. Desarrollé el frontend completo y parte del backend, destacando el sistema de seguimiento de progreso y el apartado de gestión para entrenadores. Incluye un chatbot inteligente de asistencia personalizada.',
      lolhub: 'Red social de League of Legends para interactuar con la comunidad, explorar información detallada sobre campeones (habilidades, builds, lore) y crear tu equipo ideal. Desarrollé el backend completo y parte del frontend, utilizando una arquitectura moderna y eficiente con Docker.',
      nexusarcade: 'Plataforma de juegos rápidos que incluye Sudoku, Tres en Raya, Solitario y Blackjack. Desarrollé la totalidad del proyecto, tanto el frontend interactivo con React como el backend con Laravel, enfocándome en la lógica de juego y una experiencia de usuario fluida.'
    },
    en: {
      jobbridge: 'Digital platform specialized in connecting developers and programmers with companies looking for tech talent. The project was born with the goal of offering a more precise and efficient professional space than generalist job portals, facilitating companies access to qualified profiles and allowing developers to showcase their skills clearly and distinctively.',
      zetacuts: 'Complete digital platform for barber shop management that allows scheduling appointments, selling products and managing users. I developed the complete backend and part of the frontend, including advanced appointment management features, product inventory and user system.',
      angax: 'Fitness social network for comprehensive training tracking. It allows creating and sharing routines, visualizing progress, and connecting with an active community. I developed the complete frontend and part of the backend, specifically the progress tracking system and the trainer management section. Includes an intelligent chatbot for personalized assistance.',
      lolhub: 'League of Legends social network to interact with the community, explore detailed champion information (skills, builds, lore), and create your ideal team. I developed the complete backend and part of the frontend, using a modern and efficient architecture with Docker.',
      nexusarcade: 'Fast-paced gaming platform including Sudoku, Tic-tac-toe, Solitaire, and Blackjack. I developed the entire project, both the interactive frontend with React and the backend with Laravel, focusing on game logic and a smooth user experience.'
    }
  }

  // Datos por defecto para mostrar inmediatamente
  const getDefaultProjects = () => [
    {
      id: 1,
      title: 'JobBridge',
      description: projectDescriptions[language].jobbridge,
      technologies: ['JavaScript', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Laravel', 'PHP', 'Docker', 'Railway', 'Vercel'],
      github: 'https://github.com/Mateo9804/JobBridge',
      demo: 'https://job-bridge-alpha.vercel.app'
    },
    {
      id: 2,
      title: 'ZetaCuts',
      description: projectDescriptions[language].zetacuts,
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Docker', 'Laravel', 'Render'],
      github: 'https://github.com/Proyectos-completos/ZetaCuts',
      demo: 'https://zetacuts-frontend-hdqr.onrender.com/'
    },
    {
      id: 3,
      title: 'Angax',
      description: projectDescriptions[language].angax,
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Docker', 'Laravel', 'Render'],
      github: 'https://github.com/Angelation/Angax',
      demo: 'https://angax-frontend.onrender.com/'
    },
    {
      id: 4,
      title: 'LoLHub',
      description: projectDescriptions[language].lolhub,
      technologies: ['React.js', 'TypeScript', 'Chakra UI', 'Vite', 'Laravel', 'PHP', 'Docker'],
      github: 'https://github.com/Enrique002/LoLHub',
      demo: null
    },
    {
      id: 5,
      title: 'NexusArcade',
      description: projectDescriptions[language].nexusarcade,
      technologies: ['React.js', 'Laravel', 'PHP', 'JavaScript', 'CSS', 'Vite', 'Vercel'],
      github: 'https://github.com/Mateo9804/NexusArcade',
      demo: 'https://nexusarcade-rmiscd864-mateo9804s-projects.vercel.app/'
    }
  ]

  const [projects, setProjects] = useState(getDefaultProjects())

  useEffect(() => {
    setProjects(getDefaultProjects())
  }, [language])

  // Las llamadas a la API se han deshabilitado ya que no hay backend en producción
  // Los datos por defecto se cargan instantáneamente

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
              <img src={`${import.meta.env.BASE_URL || '/'}imagenes/github.webp`} alt="GitHub" className="project-link-icon" />
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
