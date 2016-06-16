import React from 'react'

const blockTypes = [
    { label: 'H1', style: 'header-one', button: <span>H1</span> },
    { label: 'H2', style: 'header-two', button: <span>H2</span> },
    { label: 'UL',
        style: 'unordered-list-item',
        icon: <i className="fa fa-list-ul"></i>
    },
    { label: 'OL',
        style: 'ordered-list-item',
        icon: <i className="fa fa-list-ol"></i>
    }
]

const inlineTypes = [
    { label: 'Bold',
        style: 'BOLD',
        icon: <i className="fa fa-bold"></i>
    },
    { label: 'Italic',
        style: 'ITALIC',
        icon: <i className="fa fa-italic"></i>
    },
    { label: 'Underline',
        style: 'UNDERLINE',
        icon: <i className="fa fa-underline"></i>
    }
]

export { blockTypes, inlineTypes }
