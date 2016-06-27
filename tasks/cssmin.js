module.exports = {
  files: [{
    expand: true,
    cwd: '<%= folders.app %>',
    src: ['*.css', '!*.min.css'],
    dest: '<%= folders.dist %>',
    ext: '.min.css'
  }]
}
