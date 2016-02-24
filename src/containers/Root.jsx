// Similar concept as store, load the module based on dev or prod
if (__DEBUG__) {
    module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev')
}
