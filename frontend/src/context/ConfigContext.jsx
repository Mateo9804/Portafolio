import React, { createContext, useContext, useState, useEffect } from 'react'

const ConfigContext = createContext()

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider')
  }
  return context
}

export const ConfigProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'original'
  })
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio-language') || 'es'
  })

  // Aplicar tema inmediatamente al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'original'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <ConfigContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {children}
    </ConfigContext.Provider>
  )
}

