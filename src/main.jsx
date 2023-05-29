import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContatosContextProvider } from './contexts/ContatosContextx.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContatosContextProvider>
    <App />
  </ContatosContextProvider>,
)
