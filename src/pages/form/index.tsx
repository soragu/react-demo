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
  // @ts-expect-error ts-migrate(2305) FIXME: Module '"@mui/material"' has no exported member 'I... Remove this comment to see the full error message
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

  const onFormSubmit = (data: any) => {
    console.log(data)
  }

  const handleCheckboxChange = (e: any) => {
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box component="form" className="form-page" onSubmit={handleSubmit(onFormSubmit)}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Grid container alignItems="flex-start" direction="column" spacing={2}>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <TextField
            error={Boolean(errors.name)}
            type="text"
            // @ts-expect-error ts-migrate(2783) FIXME: 'name' is specified more than once, so this usage ... Remove this comment to see the full error message
            name="name"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label={<FormattedMessage id="name" />}
            size="small"
            {...register('name', {
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element' is not assignable to type 'string |... Remove this comment to see the full error message
              required: <FormattedMessage id="nameRequired" />,
              maxLength: {
                value: 20,
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element' is not assignable to type 'string'.
                message: <FormattedMessage id="nameMaxLength" />,
              },
            })}
            helperText={errors.name ? errors.name.message : ''}
          />
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormControl sx={{ minWidth: 120 }} size="small">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <InputLabel id="zoneLabel">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormattedMessage id="region" />
            </InputLabel>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Controller
              name="region"
              control={control}
              render={({ field }) => {
                return (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Select labelId="zoneLabel" label={<FormattedMessage id="region" />} name="region" {...field}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <MenuItem key="guangzhou" value="guangzhou">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormattedMessage id="regionOption1" />
                    </MenuItem>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <MenuItem key="zhuhai" value="zhuhai">
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      <FormattedMessage id="regionOption2" />
                    </MenuItem>
                  </Select>
                )
              }}
            />
          </FormControl>
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DateRangePicker
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'null[]' is not assignable to type 'RangeInpu... Remove this comment to see the full error message
              value={dateRange}
              onChange={(value) => {
                setDateRange(value)
              }}
              renderInput={(startProps, endProps) => (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Fragment>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <TextField {...startProps} size="small" />
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Box sx={{ mx: 2 }}>
                    {' '}
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormattedMessage id="to" />{' '}
                  </Box>
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <TextField {...endProps} size="small" />
                </Fragment>
              )}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              startText={<FormattedMessage id="start" />}
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              endText={<FormattedMessage id="end" />}
            />
          </LocalizationProvider>
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormControlLabel
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            control={<Switch defaultChecked inputProps={{ name: 'delivery' }} {...register('delivery')} />}
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label={<FormattedMessage id="delivery" />}
            labelPlacement="end"
          />
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormControl component="fieldset" variant="standard">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormLabel component="label">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormattedMessage id="type" />
            </FormLabel>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormGroup>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormControlLabel
                control={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Online activities" size="small" />
                }
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                label={<FormattedMessage id="typeOption1" />}
              />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormControlLabel
                control={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Promotion activities" size="small" />
                }
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                label={<FormattedMessage id="typeOption2" />}
              />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormControlLabel
                control={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Offline activities" size="small" />
                }
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                label={<FormattedMessage id="typeOption3" />}
              />
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormControlLabel
                control={
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Checkbox onChange={handleCheckboxChange} name="type" value="Simple brand exposure" size="small" />
                }
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                label={<FormattedMessage id="typeOption4" />}
              />
            </FormGroup>
          </FormControl>
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormControl>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormLabel>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <FormattedMessage id="resource" />
            </FormLabel>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Controller
              name="resource"
              control={control}
              render={({ field }) => {
                return (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <RadioGroup name="resource" row {...field}>
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormControlLabel
                      key="Sponsor"
                      value="Sponsor"
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      control={<Radio size="small" />}
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      label={<FormattedMessage id="resourceOption1" />}
                    />
                    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <FormControlLabel
                      key="Venue"
                      value="Venue"
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      control={<Radio size="small" />}
                      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                      label={<FormattedMessage id="resourceOption2" />}
                    />
                  </RadioGroup>
                )
              }}
            />
          </FormControl>
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormControl sx={{ minWidth: 480 }}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TextField label={<FormattedMessage id="desc" />} multiline rows={4} name="desc" {...register('desc')} />
          </FormControl>
        </Grid>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Grid item>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button variant="contained" color="primary" type="submit">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormattedMessage id="buttonSubmit" />
          </Button>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button variant="outlined" sx={{ ml: 1 }}>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FormattedMessage id="buttonCancel" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FormPage
