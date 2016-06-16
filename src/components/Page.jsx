import React, { Component } from 'react'
import {Editor, EditorState, ContentState, convertFromRaw} from 'draft-js'
import Button from 'components/Button'
// import blockRenderer from 'components/CustomBlocks'

const about = `
In the fall of 2002 the Dicty Stock Center (DSC) opened at Columbia University
in New York City as a repository for Dictyostelium discoideum and other
Dictiosteliids under the direction of Dr. Richard Kessin, and curated by Mr.
    Jakob Franke. The Dicty Stock Center was relocated to Northwestern
University in April of 2009. As of July 2015, nearly 2,000 strains can be
acquired from the stock center. The strains available from the stock center are
in the strain catalog on our website. Also as of July 2015, over 800 plasmids
are available and the plasmid catalog. Both collections are rapidly expanding.
    Several strain catalogs are listed here. Additionally we hold other
materials such as DNA libraries and antobodies, accessible here. Starting in
August 2105, the National Institute of Health mandates that we charge for stock
    center materials.
`

const rawContent = {
    blocks: [
        {
            text: 'About dicty stock center',
            type: 'header-one'
        },
        {
            text: '',
            type: 'unstyled'
        },
        {
            text: about,
            type: 'paragraph'
        },
        {
            text: '',
            type: 'unstyled'
        }
    ],
    entityMap: {}
}

export default class Page extends Component {
    displayName = 'page component'
    constructor(props) {
        super(props)
        const blocks = convertFromRaw(rawContent)
        this.state = {
            editorState: EditorState.createWithContent(
                ContentState.createFromBlockArray(blocks)
            )
        }
    }
    onClick = () => {
        const { editorState } = this.state
        const { pageActions, routeProps } = this.props
        pageActions.editPage(
            editorState.getCurrentContent(),
            routeProps.params.name
        )
    }
    render() {
        const { editorState } = this.state
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-offset-1 col-sm-7">
                <Editor
                  editorState={ editorState }
                  ref="editor"
                  readOnly
                />
              </div>
            </div>
            <Button
              clickFn={ this.onClick }
              label="Edit me"
            />
          </div>
        )
    }
}
