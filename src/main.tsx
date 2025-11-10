import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tournament from './pages/Tournament'
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tournament />
  </StrictMode>,
)
