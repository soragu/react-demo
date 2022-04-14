import { Box, Typography } from '@mui/material'

const HeaderStyle = {
  height: 80,
  background: '#020202',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
}

function Header() {
  return (
    
    <Box component="header" sx={HeaderStyle}>
      
      <Typography component="h1" variant="h4">
        React Demo
      </Typography>
    </Box>
  )
}

export default Header
