import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Demo from './_index2.tsx'

const Component = () => {
  return (
    <Demo>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Demo>
  )
}

export default Component
