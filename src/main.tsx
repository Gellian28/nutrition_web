import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { browserRouter } from './router'
import { scan } from 'react-scan'; 

if (typeof window !== 'undefined') {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <RouterProvider router={browserRouter} />
  </StrictMode>,
)
