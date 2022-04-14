import {
  Home,
  ViewList,
  DynamicForm,
} from '@mui/icons-material'
import { FormattedMessage } from 'react-intl'

const sidebarConfig = [
  {
    title: <FormattedMessage id="home" />,
    path: '/dashboard',
    icon: <Home />
  },
  {
    title: <FormattedMessage id="listDemo" />,
    path: '/dashboard/list',
    icon: <ViewList />
  },
  {
    title: <FormattedMessage id="formDemo" />,
    path: '/dashboard/form',
    icon: <DynamicForm />
  }
]

export default sidebarConfig