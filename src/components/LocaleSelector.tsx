import { Fab, FormControl, MenuItem, Select } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import './LocaleSelector.css'

function LocaleSelector(props: any) {
	return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FormControl sx={{ m: 1}} className="locale selector">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Select
        labelId="localeSelector"
        id="localeSelector"
        value={props.value}
        label=""
        onChange={props.onChange}
        size="small"
        sx={{background: '#fff'}}
        data-testid="localeSelectorInput"
      >
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MenuItem value="en">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedMessage id="english" />
        </MenuItem>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MenuItem value="zh">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedMessage id="chinese" />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default LocaleSelector
