import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import Layout from '@/layout'
import { FormPage, ListPage, LoginPage, HomePage } from '@/pages'

function Router() {
  return useRoutes([{
    path: 'login', element: <LoginPage />
  }, {
      path: '/dashboard',
      element: <Layout />,
      children: [
        { index: true, path: '', element: <HomePage /> },
        { path: 'form', element: <FormPage /> },
        { path: 'list', element: <ListPage /> },
        { path: '*', element: <Navigate to="/dashboard" /> },
      ]
    },
    { path: '*', element: <Navigate to="/login" replace /> }
  ])
}

export default Router