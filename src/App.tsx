import './index.css'

import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="classscheduler-theme">
        <Toaster richColors />
        <Helmet titleTemplate="%s | class.scheduler" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
