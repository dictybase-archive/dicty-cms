import React from 'react'

const Header = (props) => <h1>{ props.block.text }</h1>
Header.displayName = 'header block'

const Header2 = (props) => <h2>{ props.block.text }</h2>
Header2.displayName = 'header2 block'

const Paragraph = (props) => <p>{ props.block.text }</p>
Paragraph.displayName = 'paragraph block'

const Span = () => <span><br/></span>
Span.displayName = 'span block'

const blockRenderer = (block) => {
    switch (block.type) {
    case 'header-one':
        return {
            component: Header
        }
    case 'header-two':
        return {
            component: Header
        }
    case 'paragraph':
        return {
            component: Paragraph
        }
    default:
        return null
    }
}

export default blockRenderer
