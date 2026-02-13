import React from 'react'
import {
  Alert,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  type AlertColor,
  type SelectChangeEvent,
} from '@mui/material'
import ReactContainer from '@/components/ReactContainer.tsx'

const Component = () => {
  const [content, setContent] = React.useState<string>('')
  const [delimiter, setDelimiter] = React.useState<string>('')
  const [message, setMessage] = React.useState<string | null>(null)
  const [severity, setSeverity] = React.useState<AlertColor>('info')

  const naturalSort = (arr: string[]): string[] => {
    return arr.sort((a, b) => {
      const numA = parseFloat(a)
      const numB = parseFloat(b)

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB
      }

      return a.localeCompare(b, undefined, {
        sensitivity: 'base',
        numeric: true,
      })
    })
  }

  const clearAlertMessage = () => {
    setMessage(null)
  }

  const handleDelimiterChange = (event: SelectChangeEvent) => {
    setDelimiter(event.target.value)
    clearAlertMessage()
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
    clearAlertMessage()
  }

  const handleResult = async () => {
    if (content && delimiter) {
      const arr = naturalSort(
        Array.from(new Set(content.split(delimiter)))
          .map((item) => item.trim())
          .filter((item) => item !== '')
      )
      const str = String(arr.join(delimiter))

      try {
        await navigator.clipboard.writeText(str)
        setContent(str)
        setSeverity('success')
        setMessage('The sorted content has been copied to the clipboard.')
      } catch (e) {
        setSeverity('error')
        setMessage('Failed to copy to clipboard.')
        console.error(e)
      }
    } else {
      setSeverity('info')
      setMessage('Please input first.')
    }
  }

  const delimiterItems = [
    { value: ' ', label: 'Space' },
    { value: '\n', label: 'BlankLine' },
    { value: ',', label: 'Comma' },
    { value: '.', label: 'Period' },
  ]

  return (
    <ReactContainer>
      <div className="comp-container ut-header-offset">
        <Card>
          <CardContent>
            <div className="mb-5 text-xl">Text Sort</div>
            <div className="flex flex-col gap-5">
              {message && (
                <Alert onClose={() => setMessage(null)} severity={severity}>
                  {message}
                </Alert>
              )}
              <FormControl fullWidth variant="standard">
                <InputLabel id="delimiter">Delimiter</InputLabel>
                <Select labelId="delimiter" onChange={handleDelimiterChange} value={delimiter}>
                  <MenuItem value="">
                    <em>Select a delimiter...</em>
                  </MenuItem>
                  {delimiterItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                id="content"
                label="Content"
                multiline
                onChange={handleContentChange}
                placeholder="Enter text separated by your chosen delimiter..."
                rows={5}
                value={content}
                variant="standard"
              />

              <Button variant="contained" onClick={handleResult}>
                Result
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ReactContainer>
  )
}

export default Component
