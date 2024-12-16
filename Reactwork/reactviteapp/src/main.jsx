import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appprops from './Appprops.jsx'
import AppContext from './AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Appprops/> */}
    {/* <App /> */}
    <AppContext/>
    </StrictMode>
)
