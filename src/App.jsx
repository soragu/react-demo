import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { FormPage, ListPage, LoginPage } from '@/pages'
import './App.css'
import { en_US, zh_CN } from '@/locale'
import LocaleSelector from '@/components/LocaleSelector'
import { useState } from 'react'

function App() {
  const [locale, setLocale] = useState('en')

  const handleLocaleChange = function(event) {
    setLocale(event.target.value) 
  }

  const messagesLocale = {
    'en': en_US,
    'zh': zh_CN
  }

  return (
    <IntlProvider messages={messagesLocale[locale]} locale={locale} defaultLocale="en">
      <LocaleSelector value={locale} onChange={handleLocaleChange} />
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
  )
}

export default App
