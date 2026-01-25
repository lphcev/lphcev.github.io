import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const Component = () => {
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
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </ThemeProvider>
  )
}

export default Component
