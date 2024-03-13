import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TranslationsProvider from './TranslationsProvider.jsx'


 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <TranslationsProvider>
      <App />
    </TranslationsProvider>
  </React.StrictMode>,
)
