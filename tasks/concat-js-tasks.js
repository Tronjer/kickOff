module.exports = {
  /**
  ** init: concatenates all JavaScript vendor files
  ** from development js/libs to development js/libs.js
  ** (order: jQuery, Bootstrap related scripts, everything else
  **
  ** basic: concatenates all JavaScript custom files from development js/scripts
  ** to development js/main.js
  **/
  init: {
    src: [
      '<%= config.app %>/js/libs/<%= config.jQuery %>',
      '<%= config.bootstrapPath %>/javascripts/bootstrap/*.js',
      '<%= config.app %>/js/libs/**/*.js'
    ],
    dest: '<%= config.app %>/js/libs.js'
  },
  basic: {
    src: ['<%= config.app %>/js/scripts/**/*.js'],
    dest: '<%= config.app %>/js/main.js'
  }
};
