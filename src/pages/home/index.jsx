import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function HomePage() {
  const user = useSelector(state => {
    console.log(state)
    return state.user
  })
  return (
    <Box>
      <Box>
        <label>Username:</label>
        <span>{user.username}</span>
      </Box>
      <Box>
        <label>Password:</label>
        <span>{user.password}</span>
      </Box>
    </Box>
  )
}

export default HomePage