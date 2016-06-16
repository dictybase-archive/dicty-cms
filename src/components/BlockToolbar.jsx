import React, { Component, PropTypes } from 'react'
import ToolItem from 'components/ToolItem'


export default class BlockToolbar extends Component {
    static propTypes = {
        editorState: PropTypes.object.isRequired,
        clickFn: PropTypes.func.isRequired,
        toolSpec: PropTypes.array.isRequired
    }
    displayName = 'toolbar with block controls'
    onMouseDown = (e) => {
        e.preventDefault()
    }
    render() {
        const { toolSpec, editorState, clickFn } = this.props
        const selection = editorState.getSelection()
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType()
        return (
          <div
            className="btn-group"
            role="group"
            onMouseDown={ this.onMouseDown } >
                { toolSpec.map((type) =>
                  <ToolItem
                    type={ type }
                    clickFn={ clickFn }
                    active={ blockType === type.style }
                  />
                ) }
          </div>
        )
    }
}

