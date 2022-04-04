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
  Checkbox,
} from '@mui/material'
import DateFnsUtils from '@date-io/date-fns'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useState, useEffect, Fragment } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

const defaultValues = {
  name: '',
  region: '',
  date1: null,
  date2: null,
  delivery: false,
  type: [],
  resource: '',
  desc: '',
}

function FormPage() {
  const [dateRange, setDateRange] = useState([null, null])
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  })

  const onFormSubmit = (data) => {
    console.log(data)
  }

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target

    let checkedSet = new Set(getValues(name))
    if (checked) {
      checkedSet.add(value)
    } else {
      checkedSet.delete(value)
    }
    setValue(name, Array.from(checkedSet))
  }

  useEffect(() => {
    setValue('date1', dateRange[0])
    setValue('date2', dateRange[1])
  }, [dateRange])

  return (
    <Box component="form" className="form-page" onSubmit={handleSubmit(onFormSubmit)}>
      <Grid container alignItems="flex-start" direction="column" spacing={2}>
        <Grid item>
          <TextField
            error={Boolean(errors.name)}
            type="text"
            name="name"
            label={<FormattedMessage id="name" />}
            size="small"
            {...register('name', {
              required: <FormattedMessage id="nameRequired" />,
              maxLength: {
                value: 20,
                message: <FormattedMessage id="nameMaxLength" />,
              },
            })}
            helperText={errors.name ? errors.name.message : ''}
          />
        </Grid>

        <Grid item>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="zoneLabel">
              <FormattedMessage id="region" />
            </InputLabel>
            <Controller
              name="region"
              control={control}
              render={({ field }) => {
                return (
                  <Select labelId="zoneLabel" label={<FormattedMessage id="region" />} name="region" {...field}>
                    <MenuItem key="guangzhou" value="guangzhou">
                      <FormattedMessage id="regionOption1" />
                    </MenuItem>
                    <MenuItem key="zhuhai" value="zhuhai">
                      <FormattedMessage id="regionOption2" />
                    </MenuItem>
                  </Select>
                )
              }}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              value={dateRange}
              onChange={(value) => {
                setDateRange(value)
              }}
              renderInput={(startProps, endProps) => (
                <Fragment>
                  <TextField {...startProps} size="small" />
                  <Box sx={{ mx: 2 }}>
                    {' '}
                    <FormattedMessage id="to" />{' '}
                  </Box>
                  <TextField {...endProps} size="small" />
                </Fragment>
              )}
              startText={<FormattedMessage id="start" />}
              endText={<FormattedMessage id="end" />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <FormControlLabel
            control={<Switch defaultChecked inputProps={{ name: 'delivery' }} {...register('delivery')} />}
            label={<FormattedMessage id="delivery" />}
            labelPlacement="end"
          />
        </Grid>

        <Grid item>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="label">
              <FormattedMessage id="type" />
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Online activities" size="small" />
                }
                label={<FormattedMessage id="typeOption1" />}
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Promotion activities" size="small" />
                }
                label={<FormattedMessage id="typeOption2" />}
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Offline activities" size="small" />
                }
                label={<FormattedMessage id="typeOption3" />}
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Simple brand exposure" size="small" />
                }
                label={<FormattedMessage id="typeOption4" />}
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl>
            <FormLabel>
              <FormattedMessage id="resource" />
            </FormLabel>
            <Controller
              name="resource"
              control={control}
              render={({ field }) => {
                return (
                  <RadioGroup name="resource" row {...field}>
                    <FormControlLabel
                      key="Sponsor"
                      value="Sponsor"
                      control={<Radio size="small" />}
                      label={<FormattedMessage id="resourceOption1" />}
                    />
                    <FormControlLabel
                      key="Venue"
                      value="Venue"
                      control={<Radio size="small" />}
                      label={<FormattedMessage id="resourceOption2" />}
                    />
                  </RadioGroup>
                )
              }}
            />
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl sx={{ minWidth: 480 }}>
            <TextField label={<FormattedMessage id="desc" />} multiline rows={4} name="desc" {...register('desc')} />
          </FormControl>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            <FormattedMessage id="buttonSubmit" />
          </Button>

          <Button variant="outlined" sx={{ ml: 1 }}>
            <FormattedMessage id="buttonCancel" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormPage
