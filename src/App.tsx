import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ThemeProvider } from './contexts/ThemeContext'
import { Home } from './pages/Home'

const ProjectDetail = lazy(() =>
  import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })),
)
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

const DevLinks = import.meta.env.DEV
  ? lazy(() => import('./pages/DevLinks').then((m) => ({ default: m.DevLinks })))
  : null

function MetaUpdater() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    // Always default (fullstack) meta for SEO / link previews
    document.title = t('meta.title')
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t('meta.description'))
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'))
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', t('meta.description'))
    document.documentElement.lang = i18n.language.startsWith('pt') ? 'pt' : 'en'
  }, [t, i18n.language, location.pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <MetaUpdater />
      <Header />
      <main>
        <Suspense fallback={<div className="px-6 py-20">…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/404" element={<NotFound />} />
            {DevLinks ? <Route path="/dev/links" element={<DevLinks />} /> : null}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
