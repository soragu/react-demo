import { Outlet } from 'react-router-dom'
// import { Fragment } from 'react'
import { Box, Container } from '@mui/material'
// @ts-expect-error ts-migrate(6142) FIXME: Module './Header' was resolved to 'C:/Users/guyush... Remove this comment to see the full error message
import Header from './Header'
// @ts-expect-error ts-migrate(6142) FIXME: Module './SideBar' was resolved to 'C:/Users/guyus... Remove this comment to see the full error message
import SideBar from './SideBar'

function Layout() {
	return (
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }} data-testid="layout">
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Box sx={{ flex: 'none' }}>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<Header />
			</Box>

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Box sx={{ display: 'flex', flex: 1 }}>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<Box sx={{ width: 200, flex: 'none' }}>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<SideBar />
				</Box>

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<Container component="main" sx={{ padding: 2 }}>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<Outlet />
				</Container>
			</Box>
		</Box>
	)
}

export default Layout
