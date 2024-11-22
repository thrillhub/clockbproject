import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import NaviagtionBar from './Components/NavigationBar.jsx'
import Home from './Components/Home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <NaviagtionBar />
  <Home />
    <Footer />

  </StrictMode>,
)
