module.exports = {
  /**
  ** beforeconcat: lint custom JavaScript in development js/scripts
  ** afterconcat: lint concatenated js/main.js
  **/
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  beforeconcat: ['<%= config.app %>/js/scripts/**/*.js', 'Gruntfile.js'],
  afterconcat: ['<%= config.app %>/js/main.js']
};
