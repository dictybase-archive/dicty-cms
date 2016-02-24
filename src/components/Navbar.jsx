import React, { Component } from 'react'
import 'styles/bootstrap.scss'

export class Navbar extends Component {
    displayName = 'navbar component'
    render() {
        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Page Editor</a>
              </div>
            </div>
          </nav>
        )
    }
}
