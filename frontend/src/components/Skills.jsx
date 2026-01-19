import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

// Componente para animar el número del porcentaje
const AnimatedNumber = ({ value, isVisible, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0)
      return
    }

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function para animación suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(easeOutQuart * value)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  return <span>{displayValue}%</span>
}

const Skills = () => {
  const [skills, setSkills] = useState({
    frontend: [],
    backend: [],
    tools: []
  })
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio/skills')
        setSkills(response.data)
      } catch (error) {
        console.error('Error fetching skills:', error)
        // Habilidades por defecto
        setSkills({
          frontend: [
            { name: 'React', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'HTML5', level: 95 },
            { name: 'CSS3', level: 90 },
            { name: 'Bootstrap', level: 85 }
          ],
          backend: [
            { name: 'PHP', level: 90 },
            { name: 'Laravel', level: 85 },
            { name: 'MySQL', level: 80 },
            { name: 'RESTful API', level: 85 }
          ],
          tools: [
            { name: 'Git', level: 85 },
            { name: 'Docker', level: 70 },
            { name: 'Postman', level: 80 }
          ]
        })
      }
    }
    fetchSkills()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const SkillCategory = ({ title, skillsList }) => (
    <div className="col-md-4 mb-4 fade-in-on-scroll">
      <h4 className="mb-4 text-center" style={{ color: 'var(--text-primary)', fontWeight: '700' }}>{title}</h4>
      {skillsList.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">
            <span>{skill.name}</span>
            <AnimatedNumber value={skill.level} isVisible={visible} duration={1500} />
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: visible ? `${skill.level}%` : '0%' }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="skills" ref={sectionRef} className="section skills-section">
      <div className="container">
        <h2 className="section-title fade-in-on-scroll">Habilidades</h2>
        <div className="row">
          <SkillCategory title="Frontend" skillsList={skills.frontend} />
          <SkillCategory title="Backend" skillsList={skills.backend} />
          <SkillCategory title="Herramientas" skillsList={skills.tools} />
        </div>
      </div>
    </section>
  )
}

export default Skills

