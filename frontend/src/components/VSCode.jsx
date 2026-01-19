import React, { useState, useEffect, useRef } from 'react'
import Inicio from './Inicio'
import SobreMi from './sobre_mi'
import Proyectos from './proyectos'
import Contacto from './contacto'
import Habilidades from './habilidades'
import Readme from './Readme'
import { useConfig } from '../context/ConfigContext'
import { translations } from '../translations'

const VSCode = () => {
  const [activeFile, setActiveFile] = useState('README.md')
  const [openFiles, setOpenFiles] = useState(['README.md'])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(0)
  const [showSettings, setShowSettings] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const searchContainerRef = useRef(null)
  const settingsRef = useRef(null)
  const { theme, setTheme, language, setLanguage } = useConfig()
  const t = translations[language]

  const files = [
    { name: 'README.md', displayName: 'README.md', icon: 'description', component: Readme },
    { name: 'Inicio.jsx', displayName: t.fileInicio, icon: 'home', component: Inicio },
    { name: 'sobre_mi.jsx', displayName: t.fileSobreMi, icon: 'person', component: SobreMi },
    { name: 'proyectos.jsx', displayName: t.fileProyectos, icon: 'folder', component: Proyectos },
    { name: 'habilidades.jsx', displayName: t.fileHabilidades, icon: 'star', component: Habilidades },
    { name: 'contacto.jsx', displayName: t.fileContacto, icon: 'email', component: Contacto }
  ]

  // Filtrar archivos según la búsqueda
  const getSearchResults = () => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase().trim()
    const results = []

    // Buscar por nombre de archivo (real y display)
    files.forEach(file => {
      const fileName = file.name.toLowerCase()
      const displayName = file.displayName.toLowerCase()
      const nameWithoutExt = fileName.replace('.jsx', '').replace('.md', '')
      const displayWithoutExt = displayName.replace('.jsx', '').replace('.md', '')
      
      if (fileName.includes(query) || 
          displayName.includes(query) ||
          nameWithoutExt.includes(query) || 
          displayWithoutExt.includes(query) ||
          query.includes(nameWithoutExt) ||
          query.includes(displayWithoutExt)) {
        if (!results.find(r => r.name === file.name)) {
          results.push(file)
        }
      }
    })

    return results
  }

  const searchResults = getSearchResults()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setSelectedSearchIndex(0)
  }

  const handleSelectFile = (fileName) => {
    setActiveFile(fileName)
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName])
    }
    setSearchQuery('')
    setSelectedSearchIndex(0)
  }

  const handleSearchKeyDown = (e) => {
    if (searchResults.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedSearchIndex(prev => (prev + 1) % searchResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedSearchIndex(prev => (prev - 1 + searchResults.length) % searchResults.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (searchResults[selectedSearchIndex]) {
        handleSelectFile(searchResults[selectedSearchIndex].name)
      }
    } else if (e.key === 'Escape') {
      setSearchQuery('')
      setSelectedSearchIndex(0)
    }
  }

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchQuery('')
        setSelectedSearchIndex(0)
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleFileClick = (fileName) => {
    setActiveFile(fileName)
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName])
    }
  }

  const handleCloseTab = (fileName, e) => {
    e.stopPropagation()
    const newOpenFiles = openFiles.filter(f => f !== fileName)
    setOpenFiles(newOpenFiles)
    if (activeFile === fileName && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1])
    } else if (newOpenFiles.length === 0) {
      setActiveFile('README.md')
      setOpenFiles(['README.md'])
    }
  }

  const ActiveComponent = files.find(f => f.name === activeFile)?.component || Readme

  // Función para resaltar texto en los resultados
  const highlightText = (text, query) => {
    if (!query.trim()) return text

    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="search-highlight">{part}</span>
      ) : (
        part
      )
    )
  }

  return (
    <div className="vscode-container">
      {/* Barra superior */}
      <div className="vscode-titlebar">
        <div className="titlebar-left">
          <button
            className="titlebar-button mobile-menu-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Menú"
          >
            <span className="material-icons">menu</span>
          </button>
          <span className="titlebar-title">&lt;&gt; {language === 'es' ? 'Portafolio' : 'Portfolio'}</span>
        </div>
        <div className="titlebar-center">
          <div className="search-container" ref={searchContainerRef}>
            <input 
              type="text" 
              className="vscode-search" 
              placeholder={t.search}
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleSearchKeyDown}
              onFocus={() => setSelectedSearchIndex(0)}
            />
            <button className="search-icon">
              <span className="material-icons">search</span>
            </button>
            {searchQuery && searchResults.length > 0 && (
              <div className="search-results-dropdown">
                <div className="search-results-header">
                  {t.searchPlaceholder}
                </div>
                {searchResults.map((file, index) => (
                  <div
                    key={file.name}
                    className={`search-result-item ${index === selectedSearchIndex ? 'selected' : ''}`}
                    onClick={() => handleSelectFile(file.name)}
                    onMouseEnter={() => setSelectedSearchIndex(index)}
                  >
                    <span className="material-icons search-result-icon">{file.icon}</span>
                    <span className="search-result-name">
                      {highlightText(file.displayName, searchQuery)}
                    </span>
                    <span className="search-result-path">frontend/src/components</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="titlebar-right">
          <div className="settings-container" ref={settingsRef}>
            <button 
              className="titlebar-button"
              onClick={() => setShowSettings(!showSettings)}
            >
              <span className="material-icons">settings</span>
            </button>
            {showSettings && (
              <div className="settings-dropdown">
                <div className="settings-section">
                  <div className="settings-label">{t.theme}</div>
                  <div className="settings-options">
                    <button
                      className={`settings-option ${theme === 'original' ? 'active' : ''}`}
                      onClick={() => {
                        setTheme('original')
                        setShowSettings(false)
                      }}
                    >
                      {t.themeOriginal}
                    </button>
                    <button
                      className={`settings-option ${theme === 'darker' ? 'active' : ''}`}
                      onClick={() => {
                        setTheme('darker')
                        setShowSettings(false)
                      }}
                    >
                      {t.themeDarker}
                    </button>
                    <button
                      className={`settings-option ${theme === 'light' ? 'active' : ''}`}
                      onClick={() => {
                        setTheme('light')
                        setShowSettings(false)
                      }}
                    >
                      {t.themeLight}
                    </button>
                  </div>
                </div>
                <div className="settings-section">
                  <div className="settings-label">{t.language}</div>
                  <div className="settings-options">
                    <button
                      className={`settings-option ${language === 'es' ? 'active' : ''}`}
                      onClick={() => {
                        setLanguage('es')
                        setShowSettings(false)
                      }}
                    >
                      {t.languageEs}
                    </button>
                    <button
                      className={`settings-option ${language === 'en' ? 'active' : ''}`}
                      onClick={() => {
                        setLanguage('en')
                        setShowSettings(false)
                      }}
                    >
                      {t.languageEn}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="vscode-main">
        {/* Sidebar */}
        <div className={`vscode-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <span className="sidebar-title">{t.explorer}</span>
            <button
              className="sidebar-close-button"
              onClick={() => setSidebarOpen(false)}
              title="Cerrar"
            >
              <span className="material-icons">close</span>
            </button>
          </div>
          <div className="file-explorer">
            {files.map((file) => (
              <div
                key={file.name}
                className={`file-item ${activeFile === file.name ? 'active' : ''}`}
                onClick={() => {
                  handleFileClick(file.name)
                  setSidebarOpen(false)
                }}
              >
                <div className="file-indicator"></div>
                <span className="material-icons file-icon">{file.icon}</span>
                <span className="file-name">{file.displayName}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Overlay para móviles */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
        )}

        {/* Editor Area */}
        <div className="vscode-editor-area">
          {/* Tabs */}
          <div className="editor-tabs">
            {openFiles.map((fileName) => (
              <div
                key={fileName}
                className={`editor-tab ${activeFile === fileName ? 'active' : ''}`}
                onClick={() => setActiveFile(fileName)}
              >
                <span className="material-icons tab-icon">
                  {files.find(f => f.name === fileName)?.icon || 'description'}
                </span>
                <span className="tab-name">{files.find(f => f.name === fileName)?.displayName || fileName}</span>
                <button
                  className="tab-close"
                  onClick={(e) => handleCloseTab(fileName, e)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div className="editor-content">
            <ActiveComponent />
          </div>
        </div>
      </div>

      {/* Barra inferior azul */}
      <div className="vscode-statusbar">
        <div className="statusbar-content">
          <span className="statusbar-text">{t.statusbar}</span>
        </div>
      </div>
    </div>
  )
}

export default VSCode

