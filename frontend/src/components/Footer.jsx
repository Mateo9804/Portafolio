import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Contact Information - All in one line: Email, LinkedIn, GitHub, Phone */}
        <div className="footer-contact mb-4">
          <div className="footer-main-links-wrapper">
            <div className="footer-main-links">
            <a 
              href="mailto:mateovera9804@gmail.com"
              className="footer-contact-item"
              aria-label="Email"
            >
              <i className="bi bi-envelope-fill me-2"></i>
              <span className="footer-email-text">mateovera9804@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mateo-alejandro-vera-0a656b374/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a 
              href="https://github.com/Mateo9804" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a 
              href="tel:+34611736130"
              className="footer-contact-item"
              aria-label="Teléfono"
            >
              <i className="bi bi-telephone-fill me-2"></i>
              <span>+34 611 73 61 30</span>
            </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} Mateo Alejandro Vera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

