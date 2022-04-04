import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import useResponsive from '@/hooks/useResponsive'

function HomePage() {
  const user = useSelector(state => {
    return state.user
  })

  const isDesktop = useResponsive('up', 'sm')

  return (
    <Box>
      <Box>
        <label><FormattedMessage id="username" />:</label>
        <span>{user.username}</span>
      </Box>

      <Box>
        <label><FormattedMessage id="password" />:</label>
        <span>{user.password}</span>
      </Box>

      <Box>
        Current is &nbsp;
        {isDesktop ? 'Desktop Screen' : 'Mobile Screen'}
      </Box>
    </Box>
  )
}

export default HomePage