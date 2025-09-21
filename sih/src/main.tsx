import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App'

const rootEl = document.getElementById('root') as HTMLElement;
createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
