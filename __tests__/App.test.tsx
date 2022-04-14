import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../test-utils'
import App from '@/App.jsx'

describe('App', () => {
  it('renders <LoginPage />', () => {
    render(<App />)
    expect(screen.getByTestId('loginPage')).toBeInTheDocument()
  })
})
