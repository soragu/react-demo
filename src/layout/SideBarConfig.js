import {
  Home,
  ViewList,
  DynamicForm
} from '@mui/icons-material'

const sidebarConfig = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: <Home />
  },
  {
    title: 'List Demo',
    path: '/dashboard/list',
    icon: <ViewList />
  },
  {
    title: 'Form Demo',
    path: '/dashboard/form',
    icon: <DynamicForm />
  }
]

export default sidebarConfig