import {
  Box,
  FormControlLabel,
  InputLabel,
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
  Item,
  Switch,
  FormGroup,
  Checkbox
} from '@mui/material'
import DateFnsUtils from '@date-io/date-fns'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useState, useEffect, Fragment } from 'react'

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

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target
    let checkedSet = new Set(formValues[name])
    if (checked) {
      checkedSet.add(value)
    } else {
      checkedSet.delete(value)
    }
    setFormValues({
      ...formValues,
      [name]: Array.from(checkedSet),
    })

  }

  useEffect(() => {
    setFormValues({
      ...formValues,
      date1: dateRange[0],
      date2: dateRange[1],
    })
  }, [dateRange])

  return (
    <Box component="form" className="form-page" onSubmit={handleSubmit}>
      <Grid container alignItems="flex-start" direction="column" spacing={2}>
        <Grid item>
          <TextField
            type="text"
            name="name"
            value={formValues.name}
            label="Activity name"
            onChange={handleInputChange}
            size="small"
          />
        </Grid>

        <Grid item>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="zoneLabel">Zone</InputLabel>
            <Select
              labelId="zoneLabel"
              label="Zone"
              name="region"
              value={formValues.region}
              onChange={handleInputChange}
            >
              <MenuItem key="guangzhou" value="guangzhou">
                Guangzhou
              </MenuItem>
              <MenuItem key="zhuhai" value="zhuhai">
                Zhuhai
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              value={dateRange}
              onChange={value => {
                setDateRange(value)
              }}
              renderInput={(startProps, endProps) => (
                <Fragment>
                  <TextField {...startProps} size="small" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} size="small" />
                </Fragment>
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                inputProps={{ name: 'delivery' }}
                value={formValues.delivery}
                onChange={handleSwitchChange}
              />
            }
            label="Instant delivery"
            labelPlacement="end"
          />           
        </Grid>

        <Grid item>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="label">Activity type</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Online activities" size="small" />
                }
                label="Online activities"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Promotion activities" size="small" />
                }
                label="Promotion activities"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Offline activities" size="small" />
                }
                label="Offline activities"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Simple brand exposure" size="small" />
                }
                label="Simple brand exposure"
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl>
            <FormLabel>Resources</FormLabel>
            <RadioGroup
              name="resource"
              value={formValues.resource}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="Sponsor"
                value="Sponsor"
                control={<Radio size="small" />}
                label="Sponsor"
              />
              <FormControlLabel
                key="Venue"
                value="Venue"
                control={<Radio size="small" />}
                label="Venue"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl sx={{minWidth: 480}}>
            <TextField
              label="Activity form"
              multiline
              rows={4}
              value={formValues.desc}
              name="desc"
              onChange={handleInputChange}
            />
          </FormControl> 
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>

          <Button variant="outlined" sx={{ml: 1}}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormPage
