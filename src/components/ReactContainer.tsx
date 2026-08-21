import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEffect, useState, type ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Component
