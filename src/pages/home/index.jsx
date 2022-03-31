import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'

function HomePage() {
  const user = useSelector(state => {
    return state.user
  })
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
    </Box>
  )
}

export default HomePage