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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box component="header" sx={HeaderStyle}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Typography component="h1" variant="h4">
        React Demo
      </Typography>
    </Box>
  )
}

export default Header
