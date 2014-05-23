module.exports = {
  /**
  ** Copies and minifies all JavaScript Files
  ** from development /js to prodution /js
  **/
  build: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/js',
      src: '*.js',
      dest: '<%= config.dist %>/js'
    }]
  }
};
