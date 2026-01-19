import React, { useState } from 'react'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const Contacto = () => {
  const { language } = useConfig()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Simular envío exitoso (solo frontend, no necesita backend)
    setTimeout(() => {
      setStatus({ type: 'success', message: t.messageSent })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="contacto-container">
      <div className="code-header">
        <span className="code-keyword">async function</span>{' '}
        <span className="code-variable">{t.functionEnviarMensaje}</span>(<span className="code-variable">{t.variableFormulario}</span>) {'{'}
      </div>

      {/* Formulario integrado en el código */}
      <form onSubmit={handleSubmit} className="contact-form-inline">
        <div className="form-field-block">
          <div className="code-line">
            <span className="line-number">1</span>
            <span className="code-text">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">{t.nameLabel.toLowerCase()}</span> ={' '}
            </span>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            className="code-input-block"
            required
          />
        </div>

        <div className="form-field-block">
          <div className="code-line">
            <span className="line-number">2</span>
            <span className="code-text">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">{t.emailLabel.toLowerCase()}</span> ={' '}
            </span>
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            className="code-input-block"
            required
          />
        </div>

        <div className="form-field-block">
          <div className="code-line">
            <span className="line-number">3</span>
            <span className="code-text">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">{t.subjectLabel.toLowerCase()}</span> ={' '}
            </span>
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.subjectPlaceholder}
            className="code-input-block"
            required
          />
        </div>

        <div className="form-field-block">
          <div className="code-line">
            <span className="line-number">4</span>
            <span className="code-text">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">{t.messageLabel.toLowerCase()}</span> ={' '}
            </span>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.messagePlaceholder}
            className="code-textarea-block"
            rows="4"
            required
          ></textarea>
        </div>

        {status.message && (
          <div className={`status-message-inline ${status.type}`}>
            {status.message}
          </div>
        )}

        <div className="form-button-block">
          <button 
            type="submit"
            disabled={loading}
            className="send-button"
          >
            <span className="material-icons">send</span>
            <span>{loading ? t.sending : t.sendMessage}</span>
          </button>
        </div>
      </form>

      {/* Sección de contacto directo */}
      <div className="contact-direct-section">
        <h3 className="contact-direct-title">{t.contactDirect}</h3>
        <div className="contact-direct-links">
          <a href="mailto:mateovera9804@gmail.com" className="contact-direct-link">
            <span className="material-icons">email</span>
            <span>mateovera9804@gmail.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-direct-link"
          >
            <img src={`${import.meta.env.BASE_URL || '/'}imagenes/linkedin.webp`} alt="LinkedIn" className="contact-direct-icon" />
            <span>linkedin.com/in/mateo-alejandro-vera-0a656b374/</span>
          </a>
        </div>
      </div>

      <div className="code-footer">
        {'}'}
      </div>
    </div>
  )
}

export default Contacto
