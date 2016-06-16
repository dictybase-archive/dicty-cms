import React, { Component, PropTypes } from 'react'
import ToolItem from 'components/ToolItem'

export default class InlineToolbar extends Component {
    static propTypes = {
        editorState: PropTypes.object.isRequired,
        clickFn: PropTypes.func.isRequired,
        toolSpec: PropTypes.array.isRequired
    }
    displayName = 'toolbar with inline controls'
    onMouseDown = (e) => {
        e.preventDefault()
    }
    render() {
        const { toolSpec, editorState, clickFn } = this.props
        const currentStyle = editorState.getCurrentInlineStyle()
        return (
          <div
            className="btn-group"
            role="group"
            onMouseDown={ this.onMouseDown } >
                { toolSpec.map((type) =>
                  <ToolItem
                    type={ type }
                    clickFn={ clickFn }
                    active={ currentStyle.has(type.style) }
                  />
                ) }
          </div>
        )
    }
}
