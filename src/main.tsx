import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LikesProvider } from "./context/LikesContext";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LikesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LikesProvider>
  </StrictMode>,
)
