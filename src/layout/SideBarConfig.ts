import {
  Home,
  ViewList,
  DynamicForm,
} from '@mui/icons-material'
import { FormattedMessage } from 'react-intl'

const sidebarConfig = [
  {
    // @ts-expect-error ts-migrate(2749) FIXME: 'FormattedMessage' refers to a value, but is being... Remove this comment to see the full error message
    title: <FormattedMessage id="home" />,
    path: '/dashboard',
    // @ts-expect-error ts-migrate(2749) FIXME: 'Home' refers to a value, but is being used as a t... Remove this comment to see the full error message
    icon: <Home />
  },
  {
    // @ts-expect-error ts-migrate(2749) FIXME: 'FormattedMessage' refers to a value, but is being... Remove this comment to see the full error message
    title: <FormattedMessage id="listDemo" />,
    path: '/dashboard/list',
    // @ts-expect-error ts-migrate(2749) FIXME: 'ViewList' refers to a value, but is being used as... Remove this comment to see the full error message
    icon: <ViewList />
  },
  {
    // @ts-expect-error ts-migrate(2749) FIXME: 'FormattedMessage' refers to a value, but is being... Remove this comment to see the full error message
    title: <FormattedMessage id="formDemo" />,
    path: '/dashboard/form',
    // @ts-expect-error ts-migrate(2749) FIXME: 'DynamicForm' refers to a value, but is being used... Remove this comment to see the full error message
    icon: <DynamicForm />
  }
]

export default sidebarConfig