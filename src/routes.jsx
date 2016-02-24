import {Route} from 'react-router'
import Page from 'components/Page'

const routes = (
    <Route path="/" component={ App }>
        <Route path="page/:name" component={ Page } />
    </Route>
);

export default routes
