import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from './Header'
import SideBar from './SideBar'

function Layout() {
  return (
    <Box
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
      data-testid="layout"
    >
      <Box sx={{ flex: 'none' }}>
        <Header />
      </Box>

      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box sx={{ width: 200, flex: 'none' }}>
          <SideBar />
        </Box>

        <Container component="main" sx={{ padding: 2 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
