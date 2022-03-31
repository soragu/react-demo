import {
  Box,
  FormControlLabel,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Slider,
  FormLabel,
  Grid,
} from '@mui/material'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker'
import { useState, Fragment } from 'react'

const defaultValues = {
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
}

function FormPage() {
  const [formValues, setFormValues] = useState(defaultValues)
  const [dateRange, setDateRange] = useState([null, null])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <Box component="form" className="form-page" onSubmit={handleSubmit}>
      <Grid container alignItems="flex-start" direction="column">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            value={dateRange}
            onChange={value => {
              setDateRange(value)
            }}
            renderInput={(startProps, endProps) => (
              <Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </Fragment>
            )}
          />
        </LocalizationProvider>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </Box>
  )
}

export default FormPage
