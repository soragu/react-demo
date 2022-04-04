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

function NavItem(props) {
  const {path, icon, title} = props
  const { pathname } = useLocation()
  const isActive = matchPath({ path, end: false }, pathname)
  return (
    <ListItem
      component={NavLink}
      to={path}
      style= {() => isActive ? ativeStyle : {}}
    >
      <ListItemIcon>{icon && icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItem>
  )
}


function SideBar() {
  return (
    <Box sx={{ width: '100%', height: '100%', background: '#e8f0ff'}}>
      <List component="nav">
        {
          sidebarConfig.map((item) => (
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