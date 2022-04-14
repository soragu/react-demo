import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/layout' or its corresponding... Remove this comment to see the full error message
import Layout from '@/layout'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/pages' or its corresponding ... Remove this comment to see the full error message
import { FormPage, ListPage, LoginPage, HomePage } from '@/pages'

function Router() {
  return useRoutes([{
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    path: 'login', element: <LoginPage />
  }, {
      path: '/dashboard',
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      element: <Layout />,
      children: [
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        { index: true, path: '', element: <HomePage /> },
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        { path: 'form', element: <FormPage /> },
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        { path: 'list', element: <ListPage /> },
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        { path: '*', element: <Navigate to="/dashboard" /> },
      ]
    },
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    { path: '*', element: <Navigate to="/login" replace /> }
  ])
}

export default Router