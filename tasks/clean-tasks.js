module.exports = {
  /**
  ** dev: delete app/js/main.js and app/js/libs.js
  **
  ** dist: wipe entire production branch
  ** for a clean rebuild
  **/
  dev: {
    src: ['<%= config.app %>/js/main.js', '<%= config.app %>/js/libs.js']
  },
  dist: {
    src: ['<%= config.dist %>']
  }
};
