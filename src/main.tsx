import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to 'C:/Users/guyusheng... Remove this comment to see the full error message
import App from './App'
import { Provider } from 'react-redux'
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@/store' or its corresponding ... Remove this comment to see the full error message
import store from '@/store'

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Provider store={store}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <App />
  </Provider>,
  document.getElementById('root')
)
