import React from 'react'
import '@testing-library/jest-dom'
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../test-utils' was resolved to 'C:/User... Remove this comment to see the full error message
import { render, screen } from '../../test-utils'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/components/LocaleSelector' o... Remove this comment to see the full error message
import LocaleSelector from '@/components/LocaleSelector'

let handleLocaleChange = () => {}

it('render <LocaleSelector /> correctly', () => {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  render(<LocaleSelector value="en" onChange={handleLocaleChange} />)
  expect(screen.getByText(/English/i)).toBeInTheDocument()
})
