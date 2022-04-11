import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { en_US, zh_CN } from '@/locale'
import { Provider } from 'react-redux'
import store from '@/store'

const messagesLocale = {
  en: en_US,
  zh: zh_CN,
}

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <IntlProvider messages={messagesLocale['en']} locale="en" defaultLocale="en">
        {children}
      </IntlProvider>
    </Provider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
