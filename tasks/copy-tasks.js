module.exports = {
  /*
  ** Copies Modernizr and all web fonts from development
  ** to their appropriate directories on production
  */
  main: {
    files: [
      {
        expand: true,
        cwd: '<%= config.app %>/css/fonts',
        src: ['**'],
        dest: '<%= config.dist %>/css/fonts',
      },
      {
        expand: true,
        cwd: '<%= config.app %>/js/',
        src: ['<%= config.modernizr %>'],
        dest: '<%= config.dist %>/js'
      }
    ]
  }
};
