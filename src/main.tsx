import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Emp from './Emp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Emp />
  </StrictMode>,
)
