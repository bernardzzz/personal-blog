const gulp = require('gulp');
const stream = require('stream')

const ARTICLES_DIR = '../articles'

function markdownToHtml(cb) {
    return gulp.src(`${ARTICLES_DIR}/**/main.md`)
        .pipe()
}




module.exports = markdownToHtml