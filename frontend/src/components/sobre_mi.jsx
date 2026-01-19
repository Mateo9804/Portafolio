import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const SobreMi = () => {
  const { language } = useConfig()
  const t = translations[language]

  const descriptions = {
    es: 'Insertarme en el mundo laboral, donde pueda dar mis primeros pasos en una empresa consolidada en el área de mis estudios académicos, y poner a prueba mis talentos y capacidades para crecer profesionalmente, y así retribuir con éxito la fe depositada en mi persona. Dispuesto a aprender nuevos lenguajes de programación, si así me lo solicitaran, para ampliar mis conocimientos actuales y volcarlos en beneficio de la empresa para así lograr sus objetivos.',
    en: 'Enter the labor market, where I can take my first steps in a consolidated company in the area of my academic studies, and test my talents and abilities to grow professionally, and thus successfully repay the faith placed in me. Willing to learn new programming languages, if requested, to expand my current knowledge and apply them for the benefit of the company to achieve its objectives.'
  }
  // Datos por defecto para mostrar inmediatamente
  const defaultData = {
    description: descriptions[language],
    education: [
      {
        degree: 'Ciclo Formativo de Grado Superior, Desarrollo de aplicaciones web',
        institution: 'IES Enric Valor',
        period: 'Septiembre 2023 - Junio 2026'
      },
      {
        degree: 'Bachillerato',
        institution: 'Colegio San Cayetano',
        period: '23/03/2016 – 17/12/2021'
      }
    ],
    experience: [
      {
        position: 'Desarrollador de aplicaciones web',
        company: 'Freelance',
        period: 'Julio 2025 - Presente'
      },
      {
        position: 'Desarrollador de aplicaciones web',
        company: 'NeoFranquicias SL',
        period: 'Marzo 2025'
      }
    ]
  }

  const [aboutData, setAboutData] = useState(defaultData)

  useEffect(() => {
    setAboutData(prev => ({
      ...prev,
      description: descriptions[language]
    }))
  }, [language])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/portfolio/about')
        // Solo actualizar si la respuesta tiene datos válidos
        if (response.data && (response.data.description || response.data.education?.length > 0)) {
          setAboutData({
            ...response.data,
            description: descriptions[language]
          })
        }
      } catch (error) {
        console.error('Error fetching about data:', error)
        // Mantener los datos por defecto si hay error
      }
    }
    fetchData()
  }, [language])

  return (
    <div className="sobre-mi-container">
      <div className="code-header">
        <span className="code-keyword">function</span>{' '}
        <span className="code-function">{t.functionSobreMi}</span>() {'{'}
      </div>

      {/* Descripción */}
      <div className="info-card descripcion-card">
        <h3 className="card-title descripcion-title">{t.description}</h3>
        <div className="card-content">
          <p>{aboutData.description}</p>
        </div>
      </div>

      {/* Formación */}
      <div className="info-card formacion-card">
        <h3 className="card-title formacion-title">{t.education}</h3>
        <div className="card-content">
          <ul className="info-list">
            {aboutData.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.degree}</strong> - {edu.institution}
                <br />
                <span className="period">{edu.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Experiencia */}
      <div className="info-card experiencia-card">
        <h3 className="card-title experiencia-title">{t.experience}</h3>
        <div className="card-content">
          <ul className="info-list">
            {aboutData.experience.map((exp, index) => (
              <li key={index}>
                <strong>{exp.position}</strong> - {exp.company}
                <br />
                <span className="period">{exp.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botón Descargar CV */}
      <div className="cv-section">
        <p className="cv-text">{t.cvText}</p>
        <a 
          href="/cv/CV Mateo Alejandro Vera.pdf" 
          download
          className="cv-button"
        >
          <span className="material-icons">download</span>
          <span>{t.downloadCV}</span>
        </a>
      </div>

      <div className="code-footer">
        {'}'}
      </div>
    </div>
  )
}

export default SobreMi
