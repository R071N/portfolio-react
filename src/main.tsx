import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.tsx'
import './assets/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
