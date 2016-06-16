import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import Button from 'components/Button'
import BlockToolbar from 'components/BlockToolbar'
import InlineToolbar from 'components/InlineToolbar'
import { blockTypes, inlineTypes } from 'components/ToolSpec'
import 'styles/editor.scss'
import 'styles/toolbar.scss'


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
    focus = () => this.refs.editor.focus()
    onClick = () => {

    }
    handleKeyCommand = (command) => {
        const { editorState } = this.state
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.onChange(newState)
            return true
        }
        return false
    }
    onToogleBlock = (type) => {
        this.onChange(
            RichUtils.toggleBlockType(
              this.state.editorState,
              type
            )
          )
    }
    onToogleInline = (type) => {
        this.onChange(
            RichUtils.toggleInlineStyle(
              this.state.editorState,
              type
            )
          )
    }
    render() {
        const { editorState } = this.state
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-offset-1 col-sm-7">
                <div className="row">
                  <div className="col-sm-4">
                    <BlockToolbar
                      editorState={ editorState }
                      clickFn={ this.onToogleBlock }
                      toolSpec={ blockTypes }
                    />
                  </div>
                  <div className="col-sm-1 col-sm-5">
                    <InlineToolbar
                      editorState={ editorState }
                      clickFn={ this.onToogleInline }
                      toolSpec={ inlineTypes }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row top5">
              <div className="col-sm-offset-1 col-sm-7">
                <div className="editor">
                  <Editor
                    editorState={ editorState }
                    onChange={ this.onChange }
                    handleKeyCommand={ this.handleKeyCommand }
                    ref="editor"
                  />
                </div>
              </div>
            </div>
            <Button
              clickFn={ this.onClick }
              label="Save"
            />
          </div>
        )
    }
}
