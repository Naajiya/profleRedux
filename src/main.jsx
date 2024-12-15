import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import proStore from './redux/proStore.js'
import { Provider } from 'react-redux'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={proStore}>
    <App />
    </Provider>
  
  </StrictMode>,
)
