import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import LoginPage from './components/pages/login/LoginPage.jsx'
import App from './App.jsx'
import LoginForm from './components/pages/login/LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage/>
  </StrictMode>,
)
