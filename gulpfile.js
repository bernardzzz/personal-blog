const { series } = require('gulp')
const markdownToHtml = require('./site-generator/makedown-to-html')


exports.default = series(markdownToHtml)
