// Connected component
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions'
import Navbar from 'components/Navbar'


// Which part of the Redux global state does our component want to receive as props
const mapStateToProps = (state, ownProps) => {
     /*
      *if the name of reducer is user then
      *const { user } = state
      *Then access state value through params like user.name etc.
      *Look here https://github.com/gaearon/react-redux#quick-start
      *
      *The ownProps parameter allow to access router state in container component
      *Look here https://github.com/reactjs/react-router-redux
      */

     /*
      *Then return an object which would be available via props to dumb components
      *   return { user: user, routeProps: ownProps }
      */
    return { routeProps: ownProps }
}

// Which action creators does it want to receive by props
// Look here
// https://github.com/gaearon/react-redux#connectmapstatetoprops-mapdispatchtoprops-mergeprops
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
    /*
     *All actions creators(functions) will be available via this.props.actions
     */
}

/*
 *Remember any other container component can implement both
 the mapper methods(or one of them) given above
 *get connected to redux store
 */

export class App extends Component {
    displayName = 'the primary app component';
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
        /*
         *It is recommended to select the dump components that are needed for the UI
         *The selection could be done by inspecting various prop parameters that comes
         *through redux store
         */
        return (
          <div>
            <Navbar/>
            { this.renderChildren() }
          </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
