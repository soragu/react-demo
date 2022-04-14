import { Box, Typography, Button, Chip } from '@mui/material'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/hooks/useResponsive' or its ... Remove this comment to see the full error message
import useResponsive from '@/hooks/useResponsive'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/components/SnackbarUtils' or... Remove this comment to see the full error message
import { NotiStackHepler } from '@/components/SnackbarUtils'

function HomePage() {
  const user = useSelector((state) => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'user' does not exist on type 'DefaultRoo... Remove this comment to see the full error message
    return state.user
  })

  const isDesktop = useResponsive('up', 'sm')

  const handleClick = (e: any) => {
    e.preventDefault()
    NotiStackHepler.success('notistack testing')
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedMessage id="userid" />:
        </label>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{user.userid}</span>
      </Box>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedMessage id="username" />:
        </label>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{user.username}</span>
      </Box>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormattedMessage id="roles" />:
        </label>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{user.roles.join(', ')}</span>
      </Box>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box>
        Current is &nbsp;
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        {isDesktop ? <Chip label="Desktop" /> : <Chip label="Mobile" variant="outlined" />}
      </Box>

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Box>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button onClick={handleClick}>Click Snackbar</Button>
      </Box>
    </Box>
  )
}

export default HomePage
