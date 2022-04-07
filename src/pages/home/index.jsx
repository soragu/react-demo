import { Box, Typography, Button, Chip } from '@mui/material'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import useResponsive from '@/hooks/useResponsive'
import { NotiStackHepler } from '@/components/SnackbarUtils'

function HomePage() {
  const user = useSelector((state) => {
    return state.user
  })

  const isDesktop = useResponsive('up', 'sm')

  const handleClick = (e) => {
    e.preventDefault()
    NotiStackHepler.success('notistack testing')
  }

  return (
    <Box>
      <Box>
        <label>
          <FormattedMessage id="userid" />:
        </label>
        <span>{user.userid}</span>
      </Box>

      <Box>
        <label>
          <FormattedMessage id="username" />:
        </label>
        <span>{user.username}</span>
      </Box>

      <Box>
        <label>
          <FormattedMessage id="roles" />:
        </label>
        <span>{user.roles.join(', ')}</span>
      </Box>

      <Box>
        Current is &nbsp;
        {isDesktop ? <Chip label="Desktop" /> : <Chip label="Mobile" variant="outlined" />}
      </Box>

      <Box>
        <Button onClick={handleClick}>Click Snackbar</Button>
      </Box>
    </Box>
  )
}

export default HomePage
