// The dev version is expected have the devtools component
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from 'containers/DevTools'
import { Router } from 'react-router'
import routes from 'routes'

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    displayName = 'root component'
    render() {
        const { store, history } = this.props
        return (
          <Provider store={ store }>
            <div>
              <Router routes={ routes } history={ history }/>
              <DevTools />
            </div>
          </Provider>
        )
    }
}

