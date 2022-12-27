import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//const [darkMode, setDarkMode] = useState<string>(screenData)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
