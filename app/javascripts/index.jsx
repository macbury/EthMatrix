import 'semantic-ui-css/semantic.min.css'
import '../stylesheets/app.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, history } from 'reducers'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom'
import HomePage from 'pages/home'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LoadEthereum>
          <Route exact path="/" component={HomePage} />
        </LoadEthereum>
      </ConnectedRouter>
    </Provider>, root)
})
