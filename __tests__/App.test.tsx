import React from 'react'
import '@testing-library/jest-dom'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../test-utils' was resolved to 'C:/Users/g... Remove this comment to see the full error message
import { render, screen } from '../test-utils'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/App.jsx' or its correspondin... Remove this comment to see the full error message
import App from '@/App.jsx'

describe('App', () => {
  it('renders <LoginPage />', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    render(<App />)
    expect(screen.getByTestId('loginPage')).toBeInTheDocument()
  })
})
