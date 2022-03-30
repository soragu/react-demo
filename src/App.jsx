import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { FormPage, ListPage, LoginPage } from '@/pages'
import './App.css'
import { en_US, zh_CN } from '@/locale'
import LocaleSelector from '@/components/LocaleSelector'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <LocaleSelector />

      <IntlProvider messages={en_US} locale="en" defaultLocale="en">
        <BrowserRouter>
          <Routes>
            <Route path='/form' element={<FormPage />} />
            <Route path='/list' element={<ListPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />}  />

            {/* Not Found */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </Fragment>
  )
}

export default App
