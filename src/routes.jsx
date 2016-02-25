import {Route, IndexRedirect} from 'react-router'
import Page from 'components/Page'
import EditPage from 'components/EditPage'
import {App} from 'containers/App'
import React from 'react'

const routes = (
  <Route path="/" component={ App }>
    <IndexRedirect to="page/stockcenter" />
    <Route path="page/:name" component={ Page }>
      <Route path="page/:name/edit" component={ EditPage } />
    </Route>
  </Route>
)

export default routes
