import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/pages' or its corresponding ... Remove this comment to see the full error message
import { FormPage, ListPage, LoginPage, HomePage } from '@/pages'
import './App.css'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/locale' or its corresponding... Remove this comment to see the full error message
import { en_US, zh_CN } from '@/locale'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/components/LocaleSelector' o... Remove this comment to see the full error message
import LocaleSelector from '@/components/LocaleSelector'
import { useState } from 'react'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/layout' or its corresponding... Remove this comment to see the full error message
import Layout from '@/layout'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/router' or its corresponding... Remove this comment to see the full error message
import Router from '@/router'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/components' or its correspon... Remove this comment to see the full error message
import { NotistackWrapper } from '@/components'

function App() {
  const [locale, setLocale] = useState('en')

  const handleLocaleChange = function(event: any) {
    setLocale(event.target.value) 
  }

  const messagesLocale = {
    'en': en_US,
    'zh': zh_CN
  }

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NotistackWrapper>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <IntlProvider messages={messagesLocale[locale]} locale={locale} defaultLocale="en">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LocaleSelector value={locale} onChange={handleLocaleChange} />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <BrowserRouter>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Router />
        </BrowserRouter>
      </IntlProvider>
    </NotistackWrapper>
  )
}

export default App
