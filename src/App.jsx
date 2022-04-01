import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { FormPage, ListPage, LoginPage, HomePage } from '@/pages'
import './App.css'
import { en_US, zh_CN } from '@/locale'
import LocaleSelector from '@/components/LocaleSelector'
import { useState } from 'react'
import Layout from '@/layout'
import Router from '@/router'

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
        <Router />
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
