import {Route} from 'react-router'
import Page from 'components/Page'
import App from 'containers/App'
import React from 'react'

const routes = (
  <Route path="/" component={ App }>
    <Route path="page/:name" component={ Page } />
  </Route>
)

export default routes
