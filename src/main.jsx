import React from 'react'
import ReactDOM from 'react-dom/client'
import Frutapp from './Frutapp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Frutapp />
    </BrowserRouter>
  </React.StrictMode>,
)
