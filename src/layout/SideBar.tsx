import {
  Box,
} from '@mui/material'
import sidebarConfig from './SideBarConfig'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { NavLink, matchPath, useLocation } from 'react-router-dom'

const ativeStyle = {
  fontWeight: 600,
  color: '#000',
  background: '#a5b4d0'
}

function NavItem(props: any) {
  const {path, icon, title} = props
  const { pathname } = useLocation()
  const isActive = matchPath({ path }, pathname)
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ListItem
      component={NavLink}
      to={path}
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      style= {() => isActive ? ativeStyle : {}}
    >
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListItemIcon>{icon && icon}</ListItemIcon>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListItemText disableTypography primary={title} />
    </ListItem>
  )
}


function SideBar() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box sx={{ width: '100%', height: '100%', background: '#e8f0ff'}}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <List component="nav">
        {
          sidebarConfig.map((item) => (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavItem
              key={item.path}
              {...item}
            />
          ))
        }
      </List>
    </Box>
  )
}

export default SideBar