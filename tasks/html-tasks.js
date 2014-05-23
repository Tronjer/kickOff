module.exports = {
  /**
  ** Copies and minifies all *html files
  ** from development to production
  ** keeps the folder structure
  **/
  dist: {
    options: {
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '<%= config.app %>',
      src: ['**/*.html'],
      dest: '<%= config.dist %>'
    }]
  }
};
