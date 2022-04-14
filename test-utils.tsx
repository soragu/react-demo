import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/locale' or its corresponding... Remove this comment to see the full error message
import { en_US, zh_CN } from '@/locale'
import { Provider } from 'react-redux'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/store' or its corresponding ... Remove this comment to see the full error message
import store from '@/store'

const messagesLocale = {
  en: en_US,
  zh: zh_CN,
}

const AllTheProviders = ({
  children
}: any) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Provider store={store}>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <IntlProvider messages={messagesLocale['en']} locale="en" defaultLocale="en">
        {children}
      </IntlProvider>
    </Provider>
  )
}

const customRender = (ui: any, options: any) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
