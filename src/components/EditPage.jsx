import React, { Component } from 'react'

export default class EditPage extends Component {
    displayName = 'page editor'
    render() {
        const { routeProps } = this.props
        return (
          <h2>{ routeProps.routeParams.name }</h2>
        )
    }
}
