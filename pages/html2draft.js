// import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor'
const fs = require('fs')
const DraftPasteProcessor = require('draft-js/lib/DraftPasteProcessor')
const jsdom = require('jsdom')
const HTMLAnchorElement = require('jsdom/lib/jsdom/living/nodes/HTMLAnchorElement-impl')

const window = jsdom.jsdom().defaultView
global.document = window.document
global.HTMLElement = window.HTMLElement


if (process.argv[2]) {
    console.log(process.argv[2])
    fs.readFile(process.argv[2], 'utf8', (err, content) => {
        if (err) throw err
        const processed = DraftPasteProcessor.processHTML(content)
        console.log(processed)
    })
}
