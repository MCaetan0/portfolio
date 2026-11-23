import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.tsx'
import { FocusProvider } from './contexts/FocusContext'
import { bootstrapFocusFromUrl } from './lib/focusBootstrap'

const initialFocus = bootstrapFocusFromUrl()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FocusProvider profile={initialFocus}>
      <App />
    </FocusProvider>
  </StrictMode>,
)
