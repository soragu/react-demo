import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '../../test-utils'
import LocaleSelector from '@/components/LocaleSelector'

let handleLocaleChange = () => {}

it('render <LocaleSelector /> correctly', () => {
  render(<LocaleSelector value="en" onChange={handleLocaleChange} />)
  expect(screen.getByText(/English/i)).toBeInTheDocument()
})
