import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
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

    try {
      const response = await axios.post('http://localhost:8000/api/contact', formData)
      setStatus({ type: 'success', message: response.data.message })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Error al enviar el mensaje. Por favor intenta de nuevo.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title text-white fade-in-on-scroll">Contacto</h2>
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center fade-in-on-scroll">
            <div className="contact-info mb-4">
              <p className="text-white mb-3">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:mateovera9804@gmail.com" className="text-white text-decoration-none">
                  mateovera9804@gmail.com
                </a>
              </p>
              <p className="text-white mb-3">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+34611736130" className="text-white text-decoration-none">
                  +34 611 73 61 30
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 fade-in-on-scroll">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Asunto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {status.message && (
                  <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'}`}>
                    {status.message}
                  </div>
                )}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

