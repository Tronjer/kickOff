module.exports = {
  /**
  /** Optimizes and copies images
  ** from development /img to production /img
  **/
  dynamic: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/img',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= config.dist %>/img'
    }]
  }
};
