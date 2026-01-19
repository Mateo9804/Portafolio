import React from 'react'
import VSCode from './components/VSCode'
import { ConfigProvider } from './context/ConfigContext'

function App() {
  return (
    <ConfigProvider>
      <div className="App">
        <VSCode />
      </div>
    </ConfigProvider>
  )
}

export default App

