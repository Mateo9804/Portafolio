import React from 'react'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const Readme = () => {
  const { language } = useConfig()
  const t = translations[language]

  return (
    <div className="code-content markdown-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="code-text">
          <span className="markdown-heading"># {t.readmeTitle}</span>
        </span>
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="code-text"></span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="code-text">
          {t.readmeText1}
        </span>
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="code-text"></span>
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
        <span className="code-text">
          {t.readmeText2}
        </span>
      </div>
    </div>
  )
}

export default Readme

