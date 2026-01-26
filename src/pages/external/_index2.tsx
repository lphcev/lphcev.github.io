import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEffect, useState, type ReactNode } from 'react'

interface ComponentProps {
  children: ReactNode
}

const Component = ({ children }: ComponentProps) => {
  const [theme, setTheme] = useState(() => createTheme())

  useEffect(() => {
    const themeMode = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    const newTheme = createTheme({
      palette: {
        mode: themeMode,
      },
    })
    setTheme(newTheme)
  }, [])

  return (
    <div className="ut-header-offset">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

export default Component
