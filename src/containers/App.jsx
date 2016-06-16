// Connected component
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as pageActionCreators from 'actions/page'
import Navbar from 'components/Navbar'
import 'styles/core.scss'


// Which part of the Redux global state does our component want to receive as props
const mapStateToProps = (state, ownProps) => {
    const { page } = state
    return { routeProps: ownProps, page: page }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageActions: bindActionCreators(pageActionCreators, dispatch)
    }
}


class App extends Component {
    displayName = 'the primary app component'
    /*
     *Makes sure all the props passed to all the childrens to receive the state and actions
     */
    renderChildren = () => {
        const { children } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {...this.props})
        })
    };
    render() {
        return (
          <div>
            <Navbar/>
            { this.renderChildren() }
          </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
