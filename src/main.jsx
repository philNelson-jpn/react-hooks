import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ContextProvider} from './most-common-hooks/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
)
