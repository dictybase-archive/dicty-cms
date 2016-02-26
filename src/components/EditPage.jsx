import React, { Component } from 'react'
import { Editor, EditorState } from 'draft-js'
import 'styles/editor.scss'


export default class EditPage extends Component {
    displayName = 'page editor'
    constructor(props) {
        super(props)
        if (props.page.content) {
            this.state = {
                editorState:
                    EditorState.createWithContent(props.page.content)
            }
        }
    }
    onChange = (editorState) => this.setState({editorState})
    render() {
        const { editorState } = this.state
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-offset-1 col-sm-7">
                <div className="editor">
                  <Editor
                    editorState={ editorState }
                    onChange={ this.onChange }
                    ref="editor"
                  />
                </div>
              </div>
            </div>
          </div>
        )
    }
}
