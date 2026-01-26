import React from 'react'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const Habilidades = () => {
  const { language } = useConfig()
  const t = translations[language]

  const habilidades = {
    frontend: [
      'React.js',
      'JavaScript',
      'Vite',
      'CSS',
      'HTML5'
    ],
    backend: [
      'Java',
      'PHP',
      'Laravel',
      'MySQL'
    ],
    otros: [
      'Git',
      'Docker',
      'Vercel',
      'Railway'
    ]
  }

  return (
    <div className="habilidades-container">
      <div className="code-header">
        <span className="code-keyword">const</span>{' '}
        <span className="code-variable">{t.skills}</span> = {'{'}
      </div>

      {/* Frontend */}
      <div className="habilidad-card">
        <h3 className="habilidad-title">{t.frontend}</h3>
        <div className="habilidad-badges">
          {habilidades.frontend.map((skill, index) => (
            <span key={index} className="habilidad-badge">{skill}</span>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="habilidad-card">
        <h3 className="habilidad-title">{t.backend}</h3>
        <div className="habilidad-badges">
          {habilidades.backend.map((skill, index) => (
            <span key={index} className="habilidad-badge">{skill}</span>
          ))}
        </div>
      </div>

      {/* Otros */}
      <div className="habilidad-card">
        <h3 className="habilidad-title">{t.otros}</h3>
        <div className="habilidad-badges">
          {habilidades.otros.map((skill, index) => (
            <span key={index} className="habilidad-badge">{skill}</span>
          ))}
        </div>
      </div>

      <div className="code-footer">
        {'}'}
      </div>
    </div>
  )
}

export default Habilidades

