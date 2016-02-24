import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object
    }
    displayName = 'root component'
    render() {
        const { store } = this.props
        return (
          <Provider store={ store }>
            <div>
              <Router routes={ routes } history={ browserHistory }/>
            </div>
          </Provider>
        )
    }
}

